import { Component } from '@angular/core';
import {Post} from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openclassroomAngularTp2';

  posts: Post[] = [
    new Post('Mon premier post', 'Le contenu de mon premier post', 1),
    new Post('Mon second post', '----- NC -----', 0),
    new Post('Mon dernier post', 'Bla bla bla bla.', 1),
  ];

}


