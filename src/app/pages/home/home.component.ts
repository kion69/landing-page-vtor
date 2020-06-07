import { Component, OnInit } from '@angular/core';
import { imageSource } from 'src/environments/imageSource';
import UIkit from 'uikit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parallaxNavBar: boolean;

  imageSource: string[];

  constructor(
    private activeRoute: ActivatedRoute
  ) {
    this.imageSource = imageSource;
    this.parallaxNavBar = this.activeRoute.snapshot.data.parallaxNavBar;
  }

  ngOnInit(): void { }

}
