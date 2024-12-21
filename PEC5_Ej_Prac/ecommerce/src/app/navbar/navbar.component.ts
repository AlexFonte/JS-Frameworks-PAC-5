import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public currentView: string= 'article-list';

  @Output() componentToShow = new EventEmitter<string>();

  constructor() { }

  onMenuClick(component: string) {
    console.log(component);
    this.currentView = component;
    this.componentToShow.emit(component);
  }

}
