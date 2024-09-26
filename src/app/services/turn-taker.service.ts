import { Injectable } from '@angular/core';
import { GameSaverService } from './game-saver.service';
import Game from '../models/game';
import GameEvent from '../models/game-event';
import Choice from '../models/choice';
import { EventType } from '../models/enumerations/event-type';
import Character from '../models/character';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { Sex } from '../models/enumerations/sex';

@Injectable({
  providedIn: 'root'
})
export class TurnTakerService {

  constructor(private gameSaver: GameSaverService) { }

  takeTurn(game: Game) {
    game.year++;

    var deceasedAristocrats = game.aristocracy.filter(x => !this.characterAger(x));
    game.aristocracy = game.aristocracy.filter(x => deceasedAristocrats.indexOf(x) == -1);

    var isRulerStillAlive = !this.characterAger(game.ruler);

    if(!isRulerStillAlive) {
      let previousRuler = `${game.ruler.title}, ${game.ruler.firstName} ${game.ruler.lastName}`;
      let previousRulerTitle = game.rulerTitle;
      if(game.aristocracy.length > 0) {
        game.ruler = game.aristocracy[Math.floor(Math.random() * game.aristocracy.length)];
        game.aristocracy = game.aristocracy.filter(x => x != game.ruler);
      }
      else{
        game.ruler = new Character(uniqueNamesGenerator({ dictionaries: [names], style: "capital", length: 1 }), uniqueNamesGenerator({ dictionaries: [names], style: "capital", length: 1 }), 30, Sex.MALE, previousRulerTitle);
      }
      
      game.events.push(new GameEvent(EventType.Alert, "Death of the " + game.rulerTitle, `The ${previousRuler} has died.  Long live the new ${game.rulerTitle}, ${game.ruler.firstName} ${game.ruler.lastName}.`, "death.jpg", [new Choice("Continue", "continue", "continue")]));
    }

    game.population = Math.round(game.population * 1.0087 + 1);

    this.gameSaver.Save(game);
  }

  characterAger(character: Character): boolean {
    character.age++;
    var isDead = this.randomIntFromInterval(0, 115 - character.age) === 0;
    return isDead;
  }

  randomIntFromInterval(min: number, max: number): number { // min and max included 
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
  }
}
