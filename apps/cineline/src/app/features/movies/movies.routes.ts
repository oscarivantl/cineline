import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const moviesRoutes: Routes = [
  {
    path: 'movies',
    loadComponent: () =>
      import('./movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: ':movieId',
    loadComponent: () =>
      import('./components/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent
      ),
  },
];

export { moviesRoutes };
