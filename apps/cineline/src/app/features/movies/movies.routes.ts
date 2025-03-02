import { Routes } from '@angular/router';

const moviesRoutes: Routes = [
  {
    path: '',
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
