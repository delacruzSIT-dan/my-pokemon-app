import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header style="text-align: center; margin-bottom: 20px;">
      <h1>Pokemon Region Gym Leaders</h1>

      <nav class="navbar">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/kanto" routerLinkActive="active">Kanto Region</a>
        <a routerLink="/johto" routerLinkActive="active">Johto Region</a>
        <a routerLink="/hoenn" routerLinkActive="active">Hoenn Region</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;
    }

    .navbar a {
      text-decoration: none;
      color: #2c3e50;
      font-weight: bold;
      padding: 8px 16px;
      border-radius: 5px;
      border: 1px solid #cbd5e1;
      background-color: #f8fafc;
      transition: all 0.2s ease;
    }

    .navbar a:hover {
      background-color: #e2e8f0;
    }

    .navbar a.active {
      background-color: #2c3e50;
      color: white;
    }
  `]
})
export class AppComponent {}
