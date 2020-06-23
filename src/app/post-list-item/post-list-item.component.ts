import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit(): void {
  }

  loveIt() {
    if (this.postLoveIts) {
      this.postLoveIts = 0;
    } else if (!this.postLoveIts) {
      this.postLoveIts = 1;
    }
  }

}
