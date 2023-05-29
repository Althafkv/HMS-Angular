import { Component } from '@angular/core';
import { RoomSchema } from 'src/models/roomSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {

  room:RoomSchema = {}

  constructor(private api:ApiService,private addRoomRouter:Router){

  }


  addRoom(room:RoomSchema){
    // call api
    this.api.addRoom(room).subscribe({
      next:(response:any)=>{
        // data added into server
        console.log(response);
        // navigate to home page
        this.addRoomRouter.navigateByUrl('')
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
