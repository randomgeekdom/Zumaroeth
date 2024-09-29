import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Game from '../models/game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TurnTakerService } from '../services/turn-taker.service';
import { FormsModule } from '@angular/forms';
import GameEvent from '../models/game-event';
import { GameEventComponent } from '../components/game-event/game-event.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, GameEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('myInput') inputElement!: ElementRef;

  game: Game | undefined;
  currentEvent: GameEvent | undefined;

  constructor(public gameSaver: GameSaverService, public router: Router, public turnTaker: TurnTakerService) { }

  ngOnInit(): void {
    this.reloadEvent();
  }

  nextTurn(): void {
    this.turnTaker.takeTurn(this.game!);
    this.reloadEvent();
  }

  get events(): GameEvent[] {
    return [... this.game?.events ?? []];
  }

  select(event: GameEvent): void {
    this.currentEvent = event;
  }

  reloadEvent(): void {
    let game = this.gameSaver.Load();
    if (!!game) {
      this.game = game;

      if (this.game.events.length > 0) {
        this.currentEvent = this.game.events[0];
      }
      else {
        this.currentEvent = undefined;
      }
    }
    else {
      this.router.navigate(['/new-game']);
    }
  }

  showModal(): void {
    const myInput = document.getElementById('exampleModal');
    if (!!myInput) {
      myInput.focus();
    }
  }
}
