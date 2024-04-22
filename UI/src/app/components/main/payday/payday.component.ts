import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-payday',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './payday.component.html',
  styleUrls: ['./payday.component.scss']
})
export class PaydayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
