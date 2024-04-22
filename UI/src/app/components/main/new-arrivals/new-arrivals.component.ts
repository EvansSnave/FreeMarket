import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
