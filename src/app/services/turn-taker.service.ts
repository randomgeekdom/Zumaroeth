import { Injectable } from '@angular/core';
import { GameSaverService } from './game-saver.service';
import Game from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class TurnTakerService {

  constructor(private gameSaver: GameSaverService) { }

  takeTurn(game: Game) {
    game.year ++;
    this.gameSaver.Save(game);
  }
}
