import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GameSaverService } from './services/game-saver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  introduction = "Zumaroeth, the last continent on a dying planet.  As the ruler of a nation, you must guide your people via any means to success.  Blah blah blah.";

  game: import("c:/repos/zumaroeth/src/app/models/Game").default | undefined;

  constructor(public gameSaver: GameSaverService) { }

  ngOnInit(): void {
    let game = this.gameSaver.Load();
    if (!!game) {
      this.game = game;
    }
  }

  title = 'Zumaroeth';

  SaveGame(): void {
    this.gameSaver.Save(this.game!);
  }
}