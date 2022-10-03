import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route   : string;
  text    : string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    {route: '/graficas/barras', text: 'Barras'},
    {route: '/graficas/doble-barras', text: 'Doble Barras'},
    {route: '/graficas/dona', text: 'Dona'},
    {route: '/graficas/dona-http', text: 'Dona Http'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
