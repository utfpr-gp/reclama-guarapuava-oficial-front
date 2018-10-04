import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'utfpr-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  title;
  message;
  constructor(public dialogRef: MatDialogRef<AppLoaderComponent>) { }

  ngOnInit() {
  }

}
