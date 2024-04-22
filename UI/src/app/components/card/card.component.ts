import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() width: string;

  constructor() {
    this.title = 'Default';
    this.image = '../../../assets/images/refenrence.jpg';
    this.width = '20vw';
  }

  ngOnInit() {
  }

}
