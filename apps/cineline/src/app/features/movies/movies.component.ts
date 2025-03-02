import { Component, effect, HostListener, inject } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  private readonly _moviesService = inject(MoviesService);

  readonly movies = this._moviesService.movies;

  constructor(){
    effect(() => {
      console.log(this.movies());
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollThreshold = document.documentElement.scrollHeight;

    if (scrollPosition > scrollThreshold) {
      this._moviesService.getMovies();
    }
  }

}
