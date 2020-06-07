import { Component, OnInit } from '@angular/core';
import routesConfig from '../../../route-config/route.json';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  routes = routesConfig;


  constructor() { }

  ngOnInit(): void {
  }

}
