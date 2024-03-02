import { Injectable } from '@angular/core';
import { MetaPost } from './metaPost.model';

@Injectable()
export class ForumsService {

//temp static posts, retrieve actual posts from server based on routed location
  metaPosts: MetaPost[] = [{
    id: 100000001,
    title: 'What\'s Up People!',
    date: '7/9/19',
    numComments: 6,
    rating: 123
  },{
    id: 100000002,
    title: 'A Super Duper Awesome Post',
    date: '7/6/19',
    numComments: 2,
    rating: 654
  },{
    id: 100000003,
    title: 'Totally Exposed The Fake News Agenda!',
    date: '6/6/19',
    numComments: 666,
    rating: 999
  },{
    id: 100000004,
    title: 'The Mods Are Bought and Payed For!',
    date: '5/3/19',
    numComments: 456,
    rating: 754
  },{
    id: 100000005,
    title: 'Let\'s Create A Freedom Festival',
    date: '4/25/19',
    numComments: 14,
    rating: 42
  },{
    id: 100000006,
    title: 'Can anyone help me?',
    date: '4/24/19',
    numComments: 364,
    rating: 84
  }]

}