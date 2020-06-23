import {Injectable, Input} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<Post[]>();

  private posts: Post[] = [
    new Post('Mon premier post', 'Le contenu de mon premier post', 1),
    new Post('Mon second post', '----- NC -----', 0),
    new Post('Mon dernier post', 'Bla bla bla bla.', 1),
  ];

  emitPosts(){
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post){
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(post: Post){
    const indexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(indexToRemove, 1);
    this.emitPosts();
  }

}
