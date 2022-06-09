import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public toggled: boolean = false;

  constructor() {
  }

  public toggleMenu(): void {
    this.toggled = !this.toggled;
  }

}
