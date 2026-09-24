import { Component, inject } from '@angular/core';
import { TrainerService } from '../../hoenn-trainers'

@Component({
  selector: 'app-trainer-display',
  standalone: true,
  templateUrl: './hoenn.html',
})
export class TrainerDisplay {
  public trainerService = inject(TrainerService);
}
