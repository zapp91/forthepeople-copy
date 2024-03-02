import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MetaPost } from './metaPost.model';

import { ForumsService } from './forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {
  selectedPost: MetaPost;
  metaPosts: MetaPost[];

  @Output() closePage = new EventEmitter<boolean>(true);

  constructor(private forumsService: ForumsService) { }

  ngOnInit() {
    this.metaPosts = this.forumsService.metaPosts;
  }

  close() {
    this.closePage.emit(true);
  }

  loadPost(metaPost) {
    //route to post url
  }

  errorButtonNotConfigured(postTitle) {
    // console.log('Button is not yet configured.');
    console.log(postTitle);
    this.selectedPost = postTitle;
  }
}