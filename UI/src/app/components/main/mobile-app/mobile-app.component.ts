import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-mobile-app',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
