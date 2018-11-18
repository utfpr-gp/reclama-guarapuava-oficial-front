import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProblemService} from '../../core/data-service/problem.service';
import {Problem} from '../../model/problem';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'utfpr-register-problem',
  templateUrl: './register-problem.component.html',
  styleUrls: ['./register-problem.component.scss']
})
export class RegisterProblemComponent implements OnInit {
  problems: Problem[] = [];
  form: FormGroup;
  isUpdating = false;

  constructor(private formBuilder: FormBuilder,
              private problemService: ProblemService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      id: null
    });

    this.problemService.all().subscribe(res => this.problems = res);
  }

  onSave() {
    if (this.form.valid) {
      this.problemService.create(this.mountProblem()).subscribe(res => {
        this.openDialog('Sucesso', 'Problema adicionado', 'ok');
        this.resetForm();
        this.problems.push(res);
      }, err => alert(JSON.stringify(err, null, 3)));
    }
  }

  onUpdate() {
    if (this.form.valid) {
      this.problemService.edit(this.mountProblem()).subscribe(() => {
        this.openDialog('Sucesso', 'Problema atualizado', 'ok');
        this.problemService.all().subscribe(res => this.problems = res);
      });
    }
  }

  onEdit(problem: Problem) {
    this.form.patchValue({
      name: problem.name,
      id: problem.id
    });
    this.isUpdating = true;
  }

  onRemove(problem: Problem) {
    const index: number = this.problems.indexOf(problem);
    this.problemService.destroy(problem).subscribe(() => {
      if (index !== -1) {
        this.openDialog('Sucesso', 'Problema removido', 'ok');

        this.problems.splice(index, 1);
      }
    });
  }

  onCancelUpdate() {
    this.isUpdating = false;
    this.resetForm();
  }

  private resetForm() {
    this.form.patchValue({
      name: null,
      id: null
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

  private mountProblem(): Problem {
    const problem = new Problem();
    problem.name = this.form.controls.name.value;
    problem.id = this.form.controls.id.value;
    return problem;
  }
}
