import {Component, OnInit} from '@angular/core';
import {Neighborhood} from '../../model/neighborhood';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NeighborhoodService} from '../../core/data-service/neighborhood.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({

  selector: 'utfpr-register-neighborhood',
  templateUrl: './register-neighborhood.component.html',
  styleUrls: ['./register-neighborhood.component.scss']
})
export class RegisterNeighborhoodComponent implements OnInit {

  neighborhoods: Neighborhood[] = [];
  form: FormGroup;
  isUpdating = false;

  constructor(private formBuilder: FormBuilder,
              private neighborhoodService: NeighborhoodService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required]
    });
    this.neighborhoodService.all().subscribe(res => {
      this.neighborhoods = res;
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.neighborhoodService.create(this.mountNeighborhood()).subscribe(res => {
        this.neighborhoods.push(res);
        this.openDialog('Sucesso', 'Bairro cadastrado com sucesso!', 'ok');
        this.resetForm();
      });
    }
  }

  onRemove(neighborhood: Neighborhood): void {
    const index: number = this.neighborhoods.indexOf(neighborhood);
    this.neighborhoodService.destroy(neighborhood).subscribe(() => {
      this.openDialog('Sucesso', 'Bairro Removido com sucesso!', 'ok');
      if (index !== -1) {
        this.neighborhoods.splice(index, 1);
      }
    });
  }

  onUpdate() {
    if (this.form.valid) {
      this.neighborhoodService.edit(this.mountNeighborhood()).subscribe(() => {
        this.neighborhoodService.all().subscribe(res => this.neighborhoods = res);
      });
    }
  }

  onEdit(neighborhood: Neighborhood): void {
    this.form.patchValue({
      id: neighborhood.id,
      name: neighborhood.name
    });
    this.isUpdating = true;
  }

  onCancelUpdate() {
    this.isUpdating = false;
    this.resetForm();
  }

  private resetForm(): void {
    this.form.patchValue({
      name: null,
      id: null
    });
  }

  private mountNeighborhood(): Neighborhood {
    const neighborhood = new Neighborhood();
    neighborhood.name = this.form.controls.name.value;
    neighborhood.id = this.form.controls.id.value;
    return neighborhood;
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
