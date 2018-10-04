import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AppLoaderModule} from './layout/app-loader/app-loader.module';
import {AuthModule} from './auth/auth.module';
import { HomeComponent } from './static-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AuthModule,
    AppLoaderModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
