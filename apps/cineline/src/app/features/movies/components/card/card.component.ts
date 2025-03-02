import { Component, input } from '@angular/core';
import { Movie } from '../../../../core/models/movies.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [JsonPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  movie = input.required<Movie>();

}
