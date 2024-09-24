import { Component, input, Input, output } from '@angular/core';
import GameEvent from '../../models/game-event';
import Game from '../../models/game';
import { CommonModule } from '@angular/common';
import Choice from '../../models/choice';
import { Observable } from 'rxjs';
import { EventResolverService } from '../../services/event-resolver.service';

@Component({
  selector: 'app-game-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-event.component.html',
  styleUrl: './game-event.component.scss'
})
export class GameEventComponent {
  constructor(private eventResolver: EventResolverService) { }

  gameEvent = input<GameEvent>();
  game = input<Game>();
  eventDismissed = output<void>();

  choose(choice: Choice) {
    this.eventResolver.resolve(this.game()!, this.gameEvent()!, choice);
    this.eventDismissed.emit();
  }
}
