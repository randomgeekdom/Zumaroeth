import { Injectable } from '@angular/core';
import { GameSaverService } from './game-saver.service';
import Game from '../models/game';
import GameEvent from '../models/game-event';
import Choice from '../models/choice';

@Injectable({
  providedIn: 'root'
})
export class TurnTakerService {

  constructor(private gameSaver: GameSaverService) { }

  takeTurn(game: Game) {
    game.year ++;
    var event = new GameEvent("A new turn", "A new turn: " + game.year, "", [
      new Choice("Dismiss", "Dismiss", "", (game: Game, gameEvent: GameEvent) => {
          var index = game.events.indexOf(gameEvent);
          game.events.splice(index, 1);
       })
    ]);
    game.events.push(event);
    this.gameSaver.Save(game);
  }
}
