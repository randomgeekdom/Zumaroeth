import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Game from '../models/Game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.scss'
})
export class NewGameComponent {

  constructor(private gameSaver: GameSaverService, private router: Router) { }

  game = new Game();

  createGame(): void{
    this.gameSaver.Save(this.game);
    this.router.navigate(['/home']);
  }

  isCreateDisabled(): boolean {
    return !this.game.nationName || 
      !this.game.rulerName || 
      !this.game.rulerTitle || 
      this.game.nationName.trim().length == 0 || 
      this.game.rulerName.trim().length == 0 || 
      this.game.rulerTitle.trim().length == 0;
  }
}
