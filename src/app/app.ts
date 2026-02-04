import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styles: [`
    /* TOP BAR */
    .top-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 1000;
    }

    .icon {
      color: white;
      font-size: 18px;
      cursor: pointer;
    }

    /* PUSH CONTENT BELOW TOP BAR */
    .page {
      margin-top: 60px;
    }
  `],
  template: `
    <!-- GLOBAL TOP BAR -->
    <div class="top-bar">
      <span class="icon" (click)="goHome()">🏠</span>
      <span class="icon" (click)="goCart()">🛒</span>
    </div>

    <!-- PAGE CONTENT -->
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goCart() {
    this.router.navigate(['/billing']);
  }
}

