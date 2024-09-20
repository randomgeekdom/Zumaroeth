import { Injectable } from '@angular/core';
import { GameSaverService } from './game-saver.service';
import Game from '../models/game';
import Alert from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class TurnTakerService {

  constructor(private gameSaver: GameSaverService) { }

  takeTurn(game: Game) {
    game.year ++;
    game.alerts.push(new Alert("Next turn!", "Info"));
    this.gameSaver.Save(game);
  }
}
