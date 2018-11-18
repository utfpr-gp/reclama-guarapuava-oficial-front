import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatToolbarModule,
  MatTreeModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {NgxMaskModule} from 'ngx-mask';
import {CustomFormsModule} from 'ng2-validation';
import {DialogComponent} from './component/dialog/dialog.component';
import {CamelCasePipe} from './pipe/camel-case.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {TreeComponent} from './component/tree/tree.component';

const NG_MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];
const MISC_MODULES = [
  CustomFormsModule,
  FlexLayoutModule,
];
const MATERIAL_MODULES = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSelectModule,
  MatSortModule,
  MatToolbarModule,
  MatTreeModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
];

const COMPONENTS = [
  DashboardComponent,
  TreeComponent,
  DashboardComponent,
  DialogComponent,
];

@NgModule({
  imports: [
    NG_MODULES,
    MISC_MODULES,
    MATERIAL_MODULES,
    NgxMaskModule.forRoot({}),
  ],
  declarations: [
    CamelCasePipe,
    COMPONENTS,
  ],
  exports: [
    NG_MODULES,
    MISC_MODULES,
    MATERIAL_MODULES,
    NgxMaskModule,
    COMPONENTS
  ],
  entryComponents: [
    DialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SharedModule {
}
