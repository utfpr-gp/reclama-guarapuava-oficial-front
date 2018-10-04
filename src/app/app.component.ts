import {Component} from '@angular/core';

@Component({
  selector: 'utfpr-root',
  template: `
    <utfpr-navbar></utfpr-navbar>
    <utfpr-footer></utfpr-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reclama-guarapuava-oficial';
}
