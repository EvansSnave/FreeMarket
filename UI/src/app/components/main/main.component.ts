import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClotheBranchesComponent } from './clothe-branches/clothe-branches.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PaydayComponent } from './payday/payday.component';
import { FavouritesComponent } from './favourites/favourites.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WelcomeComponent, 
    ClotheBranchesComponent,
    NewArrivalsComponent,
    PaydayComponent,
    FavouritesComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
