import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model.ts';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('user') user:User='Temp';
  constructor() { }

  ngOnInit() {
    
  }

}