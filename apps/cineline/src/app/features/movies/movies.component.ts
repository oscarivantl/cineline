import { Component, computed, effect, HostListener, inject } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [JsonPipe],
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  isLoading = computed(() => this._moviesService.isLoading());
  hasMorePages = computed(() => this._moviesService.hasMorePages());

  private readonly _moviesService = inject(MoviesService);
  readonly movies = this._moviesService.movies;

  constructor(){
    effect(() => {
      console.log(this.movies());
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isLoading() || !this.hasMorePages()) { return; }

    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollThreshold = document.documentElement.scrollHeight;

    if (scrollPosition > scrollThreshold) {
      this._moviesService.getMovies();
    }
  }

}
