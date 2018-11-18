import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../core/data-service/category.service';
import {Category} from '../../model/category';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';

@Component({
  selector: 'utfpr-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.scss']
})
export class RegisterCategoryComponent implements OnInit {

  form: FormGroup;
  isUpdating = false;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      id: null
    });
    this.categoryService.all().subscribe(res => this.categories = res);
  }

  onSave() {
    if (this.form.valid) {
      this.categoryService.create(this.mountCategory())
        .subscribe(res => {
          this.categories.push(res);
        }, error1 => this.openDialog('deu ruim', JSON.stringify(error1), null));
    }
  }

  onUpdate() {
    if (this.form.valid) {
      this.categoryService.edit(this.mountCategory()).subscribe(() => {
        this.openDialog('Sucesso', 'Problema atualizado', 'ok');
        this.categoryService.all().subscribe(res => this.categories = res);
      });
    }
  }

  onEdit(category: Category) {
    this.form.patchValue({
      name: category.name,
      id: category.id
    });
    this.isUpdating = true;
  }

  onRemove(category: Category) {
    const index: number = this.categories.indexOf(category);
    this.categoryService.destroy(category).subscribe(() => {
      if (index !== -1) {
        this.openDialog('Sucesso', 'Problema removido', 'ok');
        this.categories.splice(index, 1);
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

  private mountCategory(): Category {
    const category = new Category();
    category.name = this.form.controls.name.value;
    category.id = this.form.controls.id.value;
    return category;
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    const dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
}
