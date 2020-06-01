import { Component, OnInit } from '@angular/core';
import { imageSource } from 'src/environments/imageSource';
import UIkit from 'uikit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  imageSource: string[];

  constructor() {
    this.imageSource = imageSource;
  }

  ngOnInit(): void { }

}
