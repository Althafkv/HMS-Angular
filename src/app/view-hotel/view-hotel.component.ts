import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {

  rooms:any = {}
  errMsg:string = ''

  constructor(private api:ApiService,private viewRouter:ActivatedRoute){

  }
  ngOnInit(): void {


    // get perticular room id from its url
    this.viewRouter.params.subscribe((data:any)=>{
      // destructuring data
      const {id} = data
      console.log(id);

    // api call to get datas
    this.api.viewRooms(id).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.rooms = response
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errMsg = err.message
      }
    })
      
    })
  }

}
