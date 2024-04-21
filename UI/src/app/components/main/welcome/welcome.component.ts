import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
