import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  currentRegion = 'Snohomish County, WA'; //Will default to USA, however a longer named region is needed for testing margins.
  regionSelectorOpen = false;
  justifyContent = 'space-between';

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openRegionSelector() {
    this.regionSelectorOpen = !this.regionSelectorOpen;
    this.messageEvent.emit(this.regionSelectorOpen);
  }

  onResize(event: ResizedEvent) {
    if (event.newHeight > 55) {
      this.justifyContent = 'center';
    } else {
      this.justifyContent = 'space-between';
    }
  }
}