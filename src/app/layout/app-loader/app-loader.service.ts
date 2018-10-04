import {Injectable} from '@angular/core';
import {AppLoaderComponent} from './app-loader/app-loader.component';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material';

@Injectable()
export class AppLoaderService {

  dialogRef: MatDialogRef<AppLoaderComponent>;

  constructor(private dialog: MatDialog) {
  }

  public open(title: string = 'Aguarde...'): Observable<boolean> {
    this.dialogRef = this.dialog.open(AppLoaderComponent, {disableClose: true});
    this.dialogRef.updateSize('200px');
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close() {
    this.dialogRef.close();
  }
}
