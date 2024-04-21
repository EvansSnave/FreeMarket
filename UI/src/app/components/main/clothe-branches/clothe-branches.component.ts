import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothe-branches',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './clothe-branches.component.html',
  styleUrls: ['./clothe-branches.component.scss']
})
export class ClotheBranchesComponent implements OnInit {
  images: Array<string>;

  constructor() { 
    this.images = [
      '../../../../assets/images/H&M-logo.svg', 
      '../../../../assets/images/Obey-Logo.png', 
      '../../../../assets/images/Shopify-logo.svg', 
      '../../../../assets/images/Lacoste-Logo.png', 
      '../../../../assets/images/levis-logo.png', 
      '../../../../assets/images/Amazon-logo.svg', 
    ];
  }

  ngOnInit() {
  }

}
