import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Game from '../models/game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sex } from '../models/enumerations/sex';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

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
  title = "Governor";
  sex = Sex.FEMALE;


  constructor(private gameSaver: GameSaverService, private router: Router) {
    this.firstName = uniqueNamesGenerator({ dictionaries: [names], style: "capital", length: 1 });
    this.lastName = uniqueNamesGenerator({ dictionaries: [names], style: "capital", length: 1 });
   }

  createGame(): void{

    var game = new Game(this.firstName, this.lastName, this.age, this.sex, this.title + "of Zumaroeth");
    game.rulerTitle = this.title;

    this.gameSaver.Save(game);
    this.router.navigate(['/home']);
  }

  isCreateDisabled(): boolean {
    return !this.firstName || 
      !this.lastName || 
      !this.title ||
      !this.age ||
      this.firstName.trim().length == 0 || 
      this.lastName.trim().length == 0 ||  
      this.title.trim().length == 0 ||  
      this.age < 15 || 
      this.age > 50;
  }
}
