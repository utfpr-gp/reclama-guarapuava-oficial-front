import {NgModule} from '@angular/core';
import {MatDialogModule, MatProgressSpinnerModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {AppLoaderComponent} from './app-loader/app-loader.component';
import {AppLoaderService} from './app-loader.service';

@NgModule({
  imports: [
    SharedModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [AppLoaderService],
  declarations: [AppLoaderComponent],
  entryComponents: [AppLoaderComponent]
})
export class AppLoaderModule {
}
