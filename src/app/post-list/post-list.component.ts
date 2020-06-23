import { Component, OnInit } from '@angular/core';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post('Mon premier post', 'Le contenu de mon premier post', 1),
    new Post('Mon second post', '----- NC -----', 0),
    new Post('Mon dernier post', 'Bla bla bla bla.', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
