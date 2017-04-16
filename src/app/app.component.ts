import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-nav></app-main-nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
