import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import UIkit from 'uikit';
import routesConfig from '../../../route-config/route.json';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  routes = routesConfig;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  closeMenu(route) {
    UIkit.offcanvas('.side-menu').hide();
    setTimeout(() => {
      this.router.navigateByUrl(`/${route}`);
    }, 300);
  }

}
