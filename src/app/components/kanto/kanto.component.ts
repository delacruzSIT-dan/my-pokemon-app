import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './kanto.component.html',
  styleUrl: './kanto.component.css'
})
export class KantoComponent {
  kantoLeaders: GymLeader[] = [
    { name: 'Brock', badge: 'Boulder Badge', location: 'Pewter City', color: '#B8A038', monologue: 'My rock-hard willpower is evident even in my Pokémon!', team: [{ pokemon: 'Onix', level: 14 }] },
    { name: 'Misty', badge: 'Cascade Badge', location: 'Cerulean City', color: '#6890F0', monologue: 'My policy is an all-out offensive with Water-type Pokémon!', team: [{ pokemon: 'Starmie', level: 21 }] },
    { name: 'Lt. Surge', badge: 'Thunder Badge', location: 'Vermilion City', color: '#F8D030', monologue: 'Electric Pokémon saved me during the war!', team: [{ pokemon: 'Raichu', level: 24 }] },
    { name: 'Erika', badge: 'Rainbow Badge', location: 'Celadon City', color: '#78C850', monologue: 'My Pokémon are delightfully quiet and lovely.', team: [{ pokemon: 'Vileplume', level: 29 }] },
    { name: 'Koga', badge: 'Soul Badge', location: 'Fuchsia City', color: '#A040A0', monologue: 'Despair to the terror of poison techniques!', team: [{ pokemon: 'Weezing', level: 43 }] },
    { name: 'Sabrina', badge: 'Marsh Badge', location: 'Saffron City', color: '#F85888', monologue: 'I have had psychic powers since I was a child.', team: [{ pokemon: 'Alakazam', level: 43 }] },
    { name: 'Blaine', badge: 'Volcano Badge', location: 'Cinnabar Island', color: '#F08030', monologue: 'You better have Burn Heal ready!', team: [{ pokemon: 'Arcanine', level: 47 }] },
    { name: 'Giovanni', badge: 'Earth Badge', location: 'Viridian City', color: '#E0C068', monologue: 'Welcome to my hideout! Team Rocket will never fall!', team: [{ pokemon: 'Rhydon', level: 50 }] }
  ];

  onLeaderSelected(leaderName: string): void {
    console.log(`Leader selected in parent component: ${leaderName}`);
  }
}