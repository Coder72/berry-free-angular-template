// Angular import
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  // public props
  @Output() onNavCollapsedMob = new EventEmitter();
  navCollapsedMob;
  headerStyle: string;
  menuClass: boolean;
  collapseStyle: string;

  // Constructor
  constructor() {
    this.navCollapsedMob = false;
    this.headerStyle = '';
    this.menuClass = false;
    this.collapseStyle = 'none';
  }

  // Life cycle events
  ngOnInit(): void {}
}