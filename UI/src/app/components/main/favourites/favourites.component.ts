import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
