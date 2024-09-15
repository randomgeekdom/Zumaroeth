import { Injectable } from '@angular/core';
import Game from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameSaverService {

  Save(game: Game): void {
    localStorage.setItem("game", JSON.stringify(game));
  }

  Load(): Game | null {
    var gameText = localStorage.getItem("game");
    if (!gameText)
      return null;

    return <Game>JSON.parse(gameText);
  }
}
