import { Component, OnInit, Input } from '@angular/core';
import routesConfig from '../../../route-config/route.json';
import UIkit from 'uikit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  routes = routesConfig;
  @Input() parallaxNavBar: any;

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.parallaxNavBar) {
      return UIkit.parallax('.navbar', {
        opacity: '0,1',
        y: '0,0',
        viewport: 0.3
      });
    }
  }
}
