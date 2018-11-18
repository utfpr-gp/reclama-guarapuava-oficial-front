import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {Occurrence} from '../../model/occurrence';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'utfpr-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.scss']
})
export class OccurrencesComponent implements OnInit {

  occurrences$;

  constructor(private occurrenceService: OccurrenceService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.occurrences$ = this.occurrenceService.all();
  }

  addLike(occurrence: Occurrence) {
    occurrence.like++;
    this.occurrenceService.edit(occurrence).subscribe(() => {
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Adicionar Like');
    });
  }

  removelike(occurrence: Occurrence) {
    occurrence.like--;
    this.occurrenceService.edit(occurrence).subscribe(() => {
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Remover Like');
    });
  }

  addUnlike(occurrence: Occurrence) {
    occurrence.unlike++;
    this.occurrenceService.edit(occurrence).subscribe(() => {
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Adicionar UnLike');
    });
  }

  removeUnlike(occurrence: Occurrence) {
    occurrence.unlike--;
    this.occurrenceService.edit(occurrence).subscribe(() => {
    }, () => {
      this.openSnackBar('Ocorreu algum erro', 'Remover UnLike');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
