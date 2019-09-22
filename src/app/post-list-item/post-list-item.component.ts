import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  //Incrementer les loveIts de 1!
  moreOne() {
    this.post.loveIts++;
  }

    //Décrémenter les loveIts de 1!
    lessOne() {
      this.post.loveIts--;
    }
}
