import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Game from '../models/game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Character from '../models/character';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.scss'
})
export class NewGameComponent {

  firstName="";
  lastName="";
  age = 25;
  title = "";
  nationName = "";


  constructor(private gameSaver: GameSaverService, private router: Router) { }

  createGame(): void{

    var game = new Game(this.firstName, this.lastName, this.age);
    game.nationName = this.nationName;
    game.rulerTitle = this.title;

    this.gameSaver.Save(game);
    this.router.navigate(['/home']);
  }

  isCreateDisabled(): boolean {
    return !this.firstName || 
      !this.lastName || 
      !this.title ||
      !this.age || 
      !this.nationName || 
      this.firstName.trim().length == 0 || 
      this.lastName.trim().length == 0 ||  
      this.title.trim().length == 0 ||  
      this.nationName.trim().length == 0 || 
      this.age < 15 || 
      this.age > 50;
  }
}
