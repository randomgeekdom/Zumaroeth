import { Component, Input } from '@angular/core';
import Decision from '../../models/game-event';

@Component({
  selector: 'app-decision',
  standalone: true,
  imports: [],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent {
  @Input()
  decision!: Decision;
}
