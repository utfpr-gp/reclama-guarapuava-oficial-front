import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {Occurrence} from '../../model/occurrence';
import {CategoryService} from '../../core/data-service/category.service';
import {Problem} from '../../model/problem';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'utfpr-register-occurrence',
  templateUrl: './register-occurrence.component.html',
  styleUrls: ['./register-occurrence.component.scss']
})
export class RegisterOccurrenceComponent implements OnInit {

  form: FormGroup;
  occurrences: Occurrence[] = [];
  isUpdating = false;

  categories$;
  problems$;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private dialog: MatDialog,
              private occurrenceService: OccurrenceService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.all();
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      category: [null, Validators.required],
      problem: [null, Validators.required]
    });

    this.occurrenceService.all().subscribe(res => this.occurrences = res);
  }

  onSave() {
    if (this.form.valid) {
      this.occurrenceService.create(this.mountOccurrence()).subscribe(res => {
        this.openDialog('Sucesso', 'Ocorrência adicionada', 'Ok');
        this.resetForm();
        this.occurrences.push(res);
      }, err => alert(JSON.stringify(err, null, 3)));
    }
  }

  onCancelUpdate() {
    this.isUpdating = false;
  }

  onRemove(occurrence: Occurrence) {
  }

  onUpdate() {
    if (this.form.valid) {
      this.occurrenceService.edit(this.mountOccurrence()).subscribe(() => {
        this.openDialog('Sucesso', 'Problema atualizado', 'ok');
        this.occurrenceService.all().subscribe(res => this.occurrences = res);
      });
    }
  }

  onEdit(occurrence: Occurrence) {
    this.form.patchValue({
      description: occurrence.description,
      category: occurrence.category.name,
      problem: occurrence.problem.name
    });
    this.form.controls.category.setValue(occurrence.category, {onlySelf: true});
    this.isUpdating = true;
  }

  onCategoryChose(category) {
   this.problems$ = this.categoryService.problems(category);
  }

  private resetForm() {
    this.form.patchValue({
      description: null,
      category: null,
      problem: null
    });
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    const dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  private mountOccurrence(): Occurrence {
    const occurrence = new Occurrence();
    occurrence.description = this.form.controls.description.value;
    occurrence.category = this.form.controls.category.value;
    occurrence.problem = this.form.controls.problem.value;

    return occurrence;
  }

}
