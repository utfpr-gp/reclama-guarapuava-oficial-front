import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {Occurrence} from '../../model/occurrence';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../core/data-service/user.service';
import {DataService} from '../../auth/service/data.service';

@Component({
  selector: 'utfpr-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.scss']
})
export class OccurrencesComponent implements OnInit {

  occurrences$;

  constructor(private occurrenceService: OccurrenceService,
              private snackBar: MatSnackBar,
              private dataService: DataService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.occurrences$ = this.occurrenceService.all();
  }

  addLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.addLike(res[0]);
      this.occurrenceService.edit(oc).subscribe(() => {
        this.occurrences$ = this.occurrenceService.all();
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Adicionar Like');
      });
    });
  }

  removeLike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.removeLike(res);
      this.occurrenceService.edit(oc).subscribe(() => {
        this.occurrences$ = this.occurrenceService.all();
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Remover Like');
      });
    });
  }

  addUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.addUnlike(res[0]);
      this.occurrenceService.edit(oc).subscribe(() => {
        this.occurrences$ = this.occurrenceService.all();
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Adicionar UnLike');
      });
    });
  }

  removeUnlike(occurrence: Occurrence) {
    const oc = this.mountOccurrence(occurrence);
    this.userService.findByEmail(this.dataService.getEmail()).subscribe(res => {
      oc.removeUnlike(res);
      this.occurrenceService.edit(oc).subscribe(() => {
        this.occurrences$ = this.occurrenceService.all();
      }, () => {
        this.openSnackBar('Ocorreu algum erro', 'Remover UnLike');
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private mountOccurrence(occurrence: Occurrence) {
    return new Occurrence(occurrence.id, occurrence.title, occurrence.like, occurrence.unlike, occurrence.views, occurrence.user, occurrence.status, occurrence.address, occurrence.problem, occurrence.createdAt, occurrence.updatedAt);
  }
}
