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

  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
    this.categoryService.all().subscribe(res => this.categories = res);
  }

  onSave() {
    if (this.form.valid) {
      this.categoryService.create(this.mountCategory())
        .subscribe(res => {
          alert('deu bao');
          this.categories.push(res);
        }, error1 => this.openDialog('deu ruim', JSON.stringify(error1), null));
    }
  }

  private mountCategory(): Category {
    const category = new Category();
    category.name = this.form.controls.name.value;
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
