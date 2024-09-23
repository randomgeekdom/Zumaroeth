import { Component, input, Input } from '@angular/core';
import GameEvent from '../../models/game-event';

@Component({
  selector: 'app-game-event',
  standalone: true,
  imports: [],
  templateUrl: './game-event.component.html',
  styleUrl: './game-event.component.scss'
})
export class GameEventComponent {
  gameEvent = input<GameEvent>();
}
