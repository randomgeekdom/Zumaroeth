import { Injectable } from '@angular/core';
import Game from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameSaverService {

  Save(game: Game): void {
    localStorage.setItem("game", JSON.stringify(game));
  }

  Load(): Game | undefined {
    var gameText = localStorage.getItem("game");
    if (!gameText)
      return undefined;

    return <Game>JSON.parse(gameText);
  }
}
