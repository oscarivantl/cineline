import { inject, Injectable, signal } from '@angular/core';
import { Movie, MovieResponse } from '../models/movies.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  movies = signal<Movie[]>([]);
  trendingMovies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | null>(null);

  private readonly _apiUrl = 'envirioment.apiUrl';
  private readonly _apiKey = 'envirioment.apiKey';
  private readonly _searchTerm = signal<string>('');

  private readonly _http = inject(HttpClient);

  constructor() {
    this._getMovies();
  }

  getMovieById(movieId: string): Observable<MovieResponse> {
    return this._http.get<MovieResponse>(
      `${this._apiUrl}/movie/${movieId}?api_key=${this._apiKey}`
    );
  }

  _getMovies(): void {
    this._http
      .get<MovieResponse>(
        `${this._apiUrl}/movie/popular?api_key=${this._apiKey}`
      )
      .pipe(tap((response) => this.movies.set(response.results)))
      .subscribe();
  }
}
