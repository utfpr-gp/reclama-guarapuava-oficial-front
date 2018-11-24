import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Occurrence} from '../../model/occurrence';
import {UserService} from '../../core/data-service/user.service';
import {DataService} from '../../auth/service/data.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'utfpr-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence-detail.component.scss']
})
export class OccurrenceDetailComponent implements OnInit {

  occurrence: Occurrence;

  constructor(private occurrenceService: OccurrenceService,
              private route: Router,
              private snackBar: MatSnackBar,
              private userService: UserService,
              private dataService: DataService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.occurrenceService.show(res.id).subscribe(res => this.occurrence = res);
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

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private mountOccurrence(occurrence: Occurrence) {
    return new Occurrence(occurrence.id, occurrence.title, occurrence.like, occurrence.unlike, occurrence.views, occurrence.user, occurrence.status, occurrence.address, occurrence.problem, occurrence.createdAt, occurrence.updatedAt);
  }

}
