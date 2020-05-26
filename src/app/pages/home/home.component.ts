import { Component, OnInit } from '@angular/core';
import { imageSource } from 'src/environments/imageSource';

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

  ngOnInit(): void {
  }

  minhaFuncao(img) {
    return {
      'background-image': `url(${img})`,
      height: '100%',
      width: '100%',
      'background-size': 'cover'
    };
  }
}
