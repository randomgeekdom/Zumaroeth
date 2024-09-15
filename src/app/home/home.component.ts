import { AfterViewInit, Component, OnInit } from '@angular/core';
import Game from '../models/Game';
import { GameSaverService } from '../services/game-saver.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private gameSaver: GameSaverService) {
  }
  ngOnInit(): void {
    let game = this.gameSaver.Load();
    if(!game){
      // redirect to new game page
    }
    else{
      // redirect to play page
    }
  }
}
