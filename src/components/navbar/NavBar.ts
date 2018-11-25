import { Component, Input } from '@angular/core';
 
@Component({
    selector: 'nav-bar',
    templateUrl: 'NavBar.html'
  })

export class NavBarComponent {
    @Input() title: string = "title not set";
}