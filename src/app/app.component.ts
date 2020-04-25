import { Component } from '@angular/core';
import { User} from './address-card/user.model.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  user: User;
  inputText: string;
  constructor(){
    this.user = new User();
    this.user.name= "Foo Baar";
    this.user.designation = 'Soft Engineer';
    this.user.address = 'f49 sector 36';
    this.user.phone = [
      '123-234-345',
      '234-345-456'
    ];
  }
}
