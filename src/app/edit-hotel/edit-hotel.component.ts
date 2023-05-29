import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { RoomSchema } from 'src/models/roomSchema';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit{

  room:RoomSchema = {}

  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

  }
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id} = pathParameter
        console.log(id);
        this.api.viewRooms(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.room = response
          }
        })
      }
    })
  }

  // editRoom
  editRoom(id:any){
    // api call to edit room
    this.api.editRoom(id,this.room).subscribe({
      next:(response:any)=>{
        // navigate to all contact
        this.editRouter.navigateByUrl("")
      }
    })
  }


}
