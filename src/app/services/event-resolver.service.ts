import { Injectable } from '@angular/core';
import Game from '../models/game';
import GameEvent from '../models/game-event';
import { EventType } from '@angular/router';
import { GameSaverService } from './game-saver.service';
import Choice from '../models/choice';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService {

  constructor(private gameSaver: GameSaverService) { }

  resolve(game: Game, event: GameEvent, choice: Choice): void {
    game.events = game.events.filter(x => x.id != event.id);
    this.gameSaver.Save(game);
  }
}
