import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {Occurrence} from '../../model/occurrence';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../core/data-service/user.service';
import {DataService} from '../../auth/service/data.service';
import {User} from '../../model/user';

@Component({
  selector: 'utfpr-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.scss']
})
export class OccurrencesComponent implements OnInit {

  occurrences$;
  private currentUser: User;

  constructor(private occurrenceService: OccurrenceService,
              private snackBar: MatSnackBar,
              private dataService: DataService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.occurrences$ = this.occurrenceService.all();
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      this.currentUser = res[0];
    });
  }

  addLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    oc.addLike(this.currentUser);
    this.occurrenceService.edit(oc).subscribe(() => {
      this.occurrences$ = this.occurrenceService.all();
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Adicionar Like');
    });
  }

  hasLiked(occurrence: Occurrence): boolean {
    return this.mountOccurrence(occurrence).likes.includes(this.currentUser);
  }

  removeLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    oc.removeLike(this.currentUser);
    this.occurrenceService.edit(oc).subscribe(() => {
      this.occurrences$ = this.occurrenceService.all();
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Remover Like');
    });
  }

  addUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    oc.addUnlike(this.currentUser);
    this.occurrenceService.edit(oc).subscribe(() => {
      this.occurrences$ = this.occurrenceService.all();
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Adicionar UnLike');
    });
  }

  removeUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    oc.removeUnlike(this.currentUser);
    this.occurrenceService.edit(oc).subscribe(() => {
      this.occurrences$ = this.occurrenceService.all();
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Remover UnLike');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private mountOccurrence(occurrence: Occurrence) {
    return new Occurrence(occurrence.id, occurrence.title, occurrence.likes, occurrence.unlikes, occurrence.views, occurrence.user, occurrence.comments, occurrence.status, occurrence.address, occurrence.problem, occurrence.createdAt, occurrence.updatedAt);
  }
}
