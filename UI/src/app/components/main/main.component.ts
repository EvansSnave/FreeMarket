import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClotheBranchesComponent } from './clothe-branches/clothe-branches.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PaydayComponent } from './payday/payday.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WelcomeComponent, 
    ClotheBranchesComponent,
    NewArrivalsComponent,
    PaydayComponent,
    FavouritesComponent, 
    MobileAppComponent,
    FormComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
