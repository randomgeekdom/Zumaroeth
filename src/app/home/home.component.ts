import { Component } from '@angular/core';
import Game from '../models/Game';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  game: Game | undefined;
}
