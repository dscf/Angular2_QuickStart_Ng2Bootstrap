import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {DatepickerDemoComponent} from './datepicker-demo.component';

@Component({
  selector: 'my-app',
  directives: [AlertComponent, DatepickerDemoComponent],
  template: '<alert type="info">ng2-bootstrap hello world!</alert> <datepicker-demo></datepicker-demo>'
})
export class AppComponent { }
