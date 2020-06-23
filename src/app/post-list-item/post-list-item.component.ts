import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  loveIt() {
    if (this.post.loveIts) {
      this.post.loveIts = 0;
    } else if (!this.post.loveIts) {
      this.post.loveIts = 1;
    }
  }

  deletePost(post: Post){
    this.postService.deletePost(post);
  }

}
