import { Component, OnInit } from '@angular/core';
import Game from '../models/Game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  game: import("c:/repos/zumaroeth/src/app/models/Game").default | undefined;

  constructor(public gameSaver: GameSaverService, public router: Router) { }

  ngOnInit(): void {
    let game = this.gameSaver.Load();
    if (!!game) {
      this.game = game;
    }
    else{
      this.router.navigate(['/new-game']);
    }
  }
}
