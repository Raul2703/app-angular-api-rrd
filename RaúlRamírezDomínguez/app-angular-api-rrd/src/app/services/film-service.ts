import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmListResponse } from '../interfaces/film-list-response';

@Service()
export class FilmService {
  private http = inject(HttpClient);

  getAllFilms(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>(`https://swapi.dev/api/films/`);
  }

  getOneFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`https://swapi.dev/api/films/${id}/`);
  }
}
