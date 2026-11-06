import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../interfaces/film-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film = input<Film>();

  getFilmId() {
   return this.film()?.url.split('/')[5];
  }
}
