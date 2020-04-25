import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model.ts';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  isCollapsed: boolean = true;
  @Input('user') user:User='Temp';
  constructor() { }
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed
  }
  ngOnInit() {
    
  }

}