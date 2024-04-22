import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;

  constructor() {
    this.title = 'Default';
    this.image = '../../../assets/images/refenrence.jpg';
  }

  ngOnInit() {
  }

}
