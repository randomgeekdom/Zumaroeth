import { Component, input, Input, output } from '@angular/core';
import GameEvent from '../../models/game-event';
import Game from '../../models/game';
import { CommonModule } from '@angular/common';
import Choice from '../../models/choice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-event.component.html',
  styleUrl: './game-event.component.scss'
})
export class GameEventComponent {
  gameEvent = input<GameEvent>();
  game = input<Game>();
  eventDismissed = input<Observable<void>>();

  choose(choice: Choice) {
    let gameEvent = this.gameEvent()!;
    let game = this.game()!;
    debugger;
    choice.action(game, gameEvent);
    this.eventDismissed();
  }
}
