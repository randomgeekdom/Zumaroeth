import { AfterViewInit, Component } from '@angular/core';
import Game from '../models/Game';
import { GameSaverService } from '../services/game-saver.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private gameSaver: GameSaverService) {
  }

  TestSave() {
    let game = new Game("test");
    this.gameSaver.Save(game);
  }
}
