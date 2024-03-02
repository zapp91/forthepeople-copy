import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../forums.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closePage.emit(true);
  }

}