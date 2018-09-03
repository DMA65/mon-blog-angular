import { Component } from '@angular/core'
import { Post } from './post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<Post> = [
    new Post(
      'Mon premier poste',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
         adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`
    ),
    new Post(
      'Mon deuxième poste',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
         adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`
    ),
    new Post(
      'Encore un poste',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
         adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`
    ),
  ]
}
