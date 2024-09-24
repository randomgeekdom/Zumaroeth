import { Injectable } from '@angular/core';
import { GameSaverService } from './game-saver.service';
import Game from '../models/game';
import GameEvent from '../models/game-event';
import Choice from '../models/choice';
import { EventType } from '../models/enumerations/event-type';

@Injectable({
  providedIn: 'root'
})
export class TurnTakerService {

  constructor(private gameSaver: GameSaverService) { }

  takeTurn(game: Game) {
    game.year ++;
    var event = new GameEvent(EventType.Alert, "A new turn", "A new turn: " + game.year, "", [
      new Choice("Dismiss", "Dismiss", "")
    ]);
    game.events.push(event);
    this.gameSaver.Save(game);
  }
}
