import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'layout-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="wrapper">
      <nav>
        <a class="mr-4" routerLink="/shell-app/link-test">shell link 2</a>
        <a routerLink="/remote-app">remote app</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {}
