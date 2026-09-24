import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css'
})
export class JohtoComponent {
  johtoLeaders: GymLeader[] = [
    { name: 'Falkner', badge: 'Zephyr Badge', location: 'Violet City', color: '#A890F0', monologue: 'I will show you the real power of Flying-type Pokemon!', team: [{ pokemon: 'Pidgeotto', level: 13 }] },
    { name: 'Bugsy', badge: 'Hive Badge', location: 'Azalea Town', color: '#A8B820', monologue: 'Bug Pokemon are deep! I know everything about them!', team: [{ pokemon: 'Scyther', level: 16 }] },
    { name: 'Whitney', badge: 'Plain Badge', location: 'Goldenrod City', color: '#A8A878', monologue: 'Everyone is into Pokemon!', team: [{ pokemon: 'Miltank', level: 20 }] },
    { name: 'Morty', badge: 'Fog Badge', location: 'Ecruteak City', color: '#705898', monologue: 'I have seen what others cannot see...', team: [{ pokemon: 'Gengar', level: 25 }] },
    { name: 'Chuck', badge: 'Storm Badge', location: 'Cianwood City', color: '#C03028', monologue: 'My Pokemon smash rocks!', team: [{ pokemon: 'Poliwrath', level: 31 }] },
    { name: 'Jasmine', badge: 'Mineral Badge', location: 'Olivine City', color: '#B8B8D0', monologue: 'Steel Pokemon are hard, cold, and sharp!', team: [{ pokemon: 'Steelix', level: 35 }] },
    { name: 'Pryce', badge: 'Glacier Badge', location: 'Mahogany Town', color: '#98D8D8', monologue: 'Winter is harsh, but Pokemon give us warmth.', team: [{ pokemon: 'Piloswine', level: 34 }] },
    { name: 'Clair', badge: 'Rising Badge', location: 'Blackthorn City', color: '#7038F8', monologue: 'I am the world’s best dragon master!', team: [{ pokemon: 'Kingdra', level: 40 }] }
  ];
  onLeaderSelected(leaderName: string): void {
    console.log(`Leader selected in Johto: ${leaderName}`);
  }
}