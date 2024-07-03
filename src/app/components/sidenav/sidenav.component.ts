import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgClass,
    NgIf,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpened = true;

  isExpanded = true;
  isShowing = false;
  showLearningSubmenu = false;
  showBasicsSubmenu = false;
  showEditSubmenu = false;
  showModifierMenu = false;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  onSidenavToggle(opened: boolean) {
    this.isSidenavOpened = opened;
  }
  toggleMenu(menu: string) {
    switch (menu) {
      case 'learning':
        this.showLearningSubmenu = !this.showLearningSubmenu;
        break;
      case 'basics':
        this.showBasicsSubmenu = !this.showBasicsSubmenu;
        break;
      case 'edit':
        this.showEditSubmenu = !this.showEditSubmenu;
        break;
      case 'modifier':
        this.showModifierMenu = !this.showModifierMenu;
        break;
      default:
        break;
    }
  }
}
