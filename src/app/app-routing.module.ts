import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // home : http://localhost:4200/
    path:'', component:HomeComponent
  },
  {
    // add-hotel : http://localhost:4200/add-hotel
    path:'add-hotel', component:AddHotelComponent
  },
  {
    // edit-hotel : http://localhost:4200/edit-hotel/roomid
    path:'edit-hotel/:id', component:EditHotelComponent
  },
  {
    // view-hotel : http://localhost:4200/view-hotel/roomid
    path:'view-hotel/:id', component:ViewHotelComponent
  },
  {
    // page-not-found : http://localhost:4200/ghfsghfjh
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
