import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private registry = signal([
    {
      name: 'Steven Stone',
      team: ['Metagross', 'Aggron', 'Cradily'],
      items: ['Metagrossite', 'Hard Stone', 'Leftovers']
    },
    {
      name: 'May',
      team: ['Blaziken', 'Beautifly', 'Delcatty'],
      items: ['Blazikenite', 'Silver Powder', 'Silk Scarf']
    },
    {
      name: 'Wally',
      team: ['Gallade', 'Altaria', 'Magnezone'],
      items: ['Galladite', 'Dragon Fang', 'Magnet']
    },
    {
      name: 'Flannery',
      team: ['Torkoal', 'Magcargo', 'Camerupt'],
      items: ['Charcoal', 'White Herb', 'Cameruptite']
    },
    {
      name: 'Norman',
      team: ['Slaking', 'Vigoroth', 'Exploud'],
      items: ['Leftovers', 'Eviolite', 'Choice Specs']
    }
  ]);

  trainers = this.registry.asReadonly();
}
