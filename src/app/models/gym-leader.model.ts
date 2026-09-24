export interface Pokemon {
  pokemon: string;
  level: number;
}

export interface GymLeader {
  name: string;
  badge: string;
  location: string;
  color: string;
  monologue: string;
  team: Pokemon[];
}