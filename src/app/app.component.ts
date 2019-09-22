import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor in ex eu consequat. Etiam tincidunt accumsan congue. Cras pretium mattis turpis et molestie. Cras tristique turpis eros, a consequat sapien molestie ut. Suspendisse sollicitudin massa nec ante tincidunt, ut rhoncus erat rutrum.',1),
    new Post('Mon deuxième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor in ex eu consequat. Etiam tincidunt accumsan congue. Cras pretium mattis turpis et molestie. Cras tristique turpis eros, a consequat sapien molestie ut. Suspendisse sollicitudin massa nec ante tincidunt, ut rhoncus erat rutrum.',-1),
    new Post('Encore un post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor in ex eu consequat. Etiam tincidunt accumsan congue. Cras pretium mattis turpis et molestie. Cras tristique turpis eros, a consequat sapien molestie ut. Suspendisse sollicitudin massa nec ante tincidunt, ut rhoncus erat.',0)
  ];
  constructor()
  {
    //console.log(this.posts);
  }
}
