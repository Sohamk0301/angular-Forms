import { Component } from '@angular/core';
import { Formdata } from './formdata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  userdata= new Formdata('',98344484200, 'soham@gmail.com','school of eng', 'MCA',true);
}
