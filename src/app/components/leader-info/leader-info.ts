import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfoComponent {
  @Input({ required: true }) leader!: GymLeader;

  @Output() monologueToggled = new EventEmitter<string>();

  showMonologue: boolean = false;

  toggleMonologue(): void {
    this.showMonologue = !this.showMonologue;
    this.monologueToggled.emit(this.leader.name);
  }
}