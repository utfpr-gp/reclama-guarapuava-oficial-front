import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Occurrence} from '../../model/occurrence';
import {UserService} from '../../core/data-service/user.service';
import {DataService} from '../../auth/service/data.service';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../model/comment';
import {User} from '../../model/user';
import {CommentService} from '../../core/data-service/comment.service';

@Component({
  selector: 'utfpr-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence-detail.component.scss']
})
export class OccurrenceDetailComponent implements OnInit {

  occurrence: Occurrence;
  commentForm: FormGroup;
  private currentUser: User;

  constructor(private occurrenceService: OccurrenceService,
              private route: Router,
              private snackBar: MatSnackBar,
              private userService: UserService,
              private commentService: CommentService,
              private dataService: DataService,
              private activateRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      this.currentUser = res[0];
    });
    this.activateRoute.params.subscribe(res => {
      this.occurrenceService.show(res.id).subscribe(res => this.occurrence = res);
    });
    this.commentForm = this.formBuilder.group({
      comment: [null, Validators.required]
    });
  }

  addComment() {
    if (this.commentForm.valid) {
      const comment = this.mountComment();
      if (this.occurrence.comments == null)
        this.occurrence.comments = [];
      this.occurrence.comments.push(comment);
      this.occurrenceService.edit(this.occurrence).subscribe(res => {
        this.occurrence = res;
        this.commentForm.reset({
          comment: null
        });
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Adicionar Comentario');
      });
    }
  }

  removeComment(comment: Comment) {
    const oc = this.mountOccurrence(this.occurrence);
    oc.removeComment(comment);
    this.occurrenceService.edit(this.occurrence).subscribe(res => {
      console.log(JSON.stringify(res, null, 3));
      this.commentService.destroy(comment).subscribe(res1 => {
        console.log(JSON.stringify(res1, null, 3));
      });
    });
  }

  addLikeToComment(comment: Comment) {
    comment.author = this.currentUser;
    this.commentService.edit(comment).subscribe(res => {
      console.log(JSON.stringify(res, null, 3));
    });
  }

  addLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.addLike(res[0]);
      this.occurrenceService.edit(oc).subscribe(res => {
        this.occurrence = res;
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Adicionar Like');
      });
    });
  }

  removeLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.removeLike(res);
      this.occurrenceService.edit(oc).subscribe(res => {
        this.occurrence = res;
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Remover Like');
      });
    });
  }

  addUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.addUnlike(res[0]);
      this.occurrenceService.edit(oc).subscribe(res => {
        this.occurrence = res;
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Adicionar UnLike');
      });
    });
  }

  removeUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.removeUnlike(res);
      this.occurrenceService.edit(oc).subscribe(res => {
        this.occurrence = res;
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Remover UnLike');
      });
    });
  }

  private mountComment(): Comment {
    const comment = new Comment();
    comment.comment = this.commentForm.controls.comment.value;
    comment.author = this.currentUser;
    return comment;
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private mountOccurrence(occurrence: Occurrence) {
    return new Occurrence(occurrence.id, occurrence.title, occurrence.likes, occurrence.unlikes, occurrence.views, occurrence.user, occurrence.comments, occurrence.status, occurrence.address, occurrence.problem, occurrence.createdAt, occurrence.updatedAt);
  }

}
