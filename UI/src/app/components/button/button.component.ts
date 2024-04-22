import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CustomButton',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() textButton: string;
  @Input() image: string;

  constructor() {
    this.textButton = 'Default';
    this.image = '';
  }

  ngOnInit() {
  }

}
