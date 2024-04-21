import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
