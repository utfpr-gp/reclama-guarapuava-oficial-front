import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {Router} from '@angular/router';

const msg404 = 'Não foi possivel encontrar com os dados fornecidos.\n\t Por Favor verifique os dados informados';
const msg401 = 'Sinto muito sua sessão expirou.\n\t por favor faça novamente o Login';
const msg500 = 'Erro no servidor, por favor tente mais tarde';
const msg400 = 'Você não possui permissão para esta ação';

@Injectable()
export class ErrorhandlerInterceptor implements ErrorHandler {


  constructor(private injector: Injector) {
  }

  handleError(error: any): void {
    this.verifyErrors(error);
  }

  verifyErrors(error: any): void {
    const dialogComponent = this.injector.get(MatDialog);
    const router = this.injector.get(Router);

    if (error.status === 400) {
      this.openDialog('Atenção', msg400, 'OK', dialogComponent);
    } else if (error.status === 401) {
      this.openDialog('Atenção', msg401, 'OK', dialogComponent);
    } else if (error.status === 404) {
      this.openDialog('Alerta', msg404, 'OK', dialogComponent);
    } else if (error.status === 500 || error.status === 503) {
      this.openDialog('Erro', msg500, 'OK', dialogComponent);
    } else {
      console.log(error);
    }

  }

  private openDialog(title: string, message: string, confirmBtn: string, dialogCp: MatDialog) {
    const dialog = dialogCp.open(DialogComponent, {
      width: '350px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
}
