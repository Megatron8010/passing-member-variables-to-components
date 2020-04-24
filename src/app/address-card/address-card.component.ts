import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model.ts';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input('user') userobj:User='Temp';
  constructor() { }

  ngOnInit() {
    this.user = {
      name : this.userobj.name,
      title : this.userobj.designation,
      address : this.userobj.address,
      phone : this.userobj.phone,

    }
  }

}