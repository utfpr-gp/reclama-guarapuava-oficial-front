import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
