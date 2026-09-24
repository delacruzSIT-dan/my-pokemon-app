import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrainerService {
  private registry = signal([
    {
      name: 'Roxanne',
      town: 'Rustboro City',
      badge: 'Stone Badge',
      specialty: 'Rock',
      team: ['Geodude', 'Nosepass'],
      items: ['Hard Stone', 'Sitrus Berry']
    },
    {
      name: 'Brawly',
      town: 'Dewford Town',
      badge: 'Knuckle Badge',
      specialty: 'Fighting',
      team: ['Machop', 'Makuhita'],
      items: ['Black Belt', 'Sitrus Berry']
    },
    {
      name: 'Wattson',
      town: 'Mauville City',
      badge: 'Dynamo Badge',
      specialty: 'Electric',
      team: ['Magnemite', 'Voltorb', 'Magneton'],
      items: ['Magnet', 'None', 'Sitrus Berry']
    },
    {
      name: 'Flannery',
      town: 'Lavaridge Town',
      badge: 'Heat Badge',
      specialty: 'Fire',
      team: ['Torkoal', 'Magcargo', 'Camerupt'],
      items: ['Charcoal', 'White Herb', 'Cameruptite']
    },
    {
      name: 'Norman',
      town: 'Petalburg City',
      badge: 'Balance Badge',
      specialty: 'Normal',
      team: ['Slaking', 'Vigoroth', 'Exploud'],
      items: ['Leftovers', 'Eviolite', 'Choice Specs']
    },
    {
      name: 'Winona',
      town: 'Fortree City',
      badge: 'Feather Badge',
      specialty: 'Flying',
      team: ['Swellow', 'Pelipper', 'Skarmory', 'Altaria'],
      items: ['Sharp Beak', 'None', 'None', 'Altarianite']
    },
    {
      name: 'Tate & Liza',
      town: 'Mossdeep City',
      badge: 'Mind Badge',
      specialty: 'Psychic',
      team: ['Solrock', 'Lunatone'],
      items: ['Hard Stone', 'Sitrus Berry']
    },
    {
      name: 'Wallace',
      town: 'Sootopolis City',
      badge: 'Rain Badge',
      specialty: 'Water',
      team: ['Luvdisc', 'Whiscash', 'Sealeo', 'Milotic'],
      items: ['Mystic Water', 'None', 'None', 'Sitrus Berry']
    }
  ]);

  trainers = this.registry.asReadonly();
}
