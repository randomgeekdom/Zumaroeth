import { Component, OnInit } from '@angular/core';
import Game from '../models/game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TurnTakerService } from '../services/turn-taker.service';
import { FormsModule } from '@angular/forms';
import GameEvent from '../models/game-event';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  game: Game | undefined;

  constructor(public gameSaver: GameSaverService, public router: Router, public turnTaker: TurnTakerService) { }

  ngOnInit(): void {
    let game = this.gameSaver.Load();
    if (!!game) {
      this.game = game;
    }
    else {
      this.router.navigate(['/new-game']);
    }
  }

  nextTurn(): void {
    this.turnTaker.takeTurn(this.game!);
  }

  get events(): GameEvent[] {
    return [... this.game?.events ?? []];
  }
}
