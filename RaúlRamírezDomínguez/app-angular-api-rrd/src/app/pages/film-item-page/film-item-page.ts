import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { Film } from '../../interfaces/film-list-response';

@Component({
  imports: [],
  selector: 'app-film-item-page',
  styleUrl: './film-item-page.css',
  templateUrl: './film-item-page.html',
})
export class FilmItemPage {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);
  filmId = '';
  film = signal<Film | undefined>(undefined);

  constructor() {
    this.route.params.subscribe(params => {
      this.filmId = params['id'];
      this.filmService.getOneFilm(this.filmId).subscribe(resp => {
        this.film.set(resp);
        console.log(resp);
      });
    });
  }
}
