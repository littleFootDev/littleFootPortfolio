import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // toggler : HTMLInputElement | null= document.querySelector(".hamburger");
  // navLinkContainer = document.querySelector(".navlinks-container");
  navIsOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
   this.navIsOpen = !this.navIsOpen;
  }
}
