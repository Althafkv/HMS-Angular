import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allRooms: any = []
  isLoading: boolean = true
  errMsg: string = ''
  searchKey: string = ''

  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllRooms()
  }

  // get all rooms
  getAllRooms() {
    this.api.getAllRooms().subscribe({
      next: (response: any) => {
        console.log(response);
        setTimeout(() => {
          this.allRooms = response
          this.isLoading = false
        }, 500);

      },
      error: (err: any) => {
        console.log(err.message);
        this.errMsg = err.message
        this.isLoading = false
      }
    })
  }

  // delete room
  deleteRoom(id: any) {
    this.api.deleteRoom(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getAllRooms()
      }
    })
  }

}
