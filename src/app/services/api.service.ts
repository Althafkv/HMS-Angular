import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomSchema } from 'src/models/roomSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://hms-server-jtlv.onrender.com'
  constructor(private http:HttpClient) { }

  // get all rooms
  getAllRooms(){
    // api call : http://localhost:3000/rooms
    return this.http.get(`${this.BASE_URL}/rooms`)
  }

  // view rooms
  viewRooms(id:any){
    return this.http.get(`${this.BASE_URL}/rooms/${id}`)
  } 

  // add rooms
  addRoom(room:RoomSchema){
    // api call
    return this.http.post(`${this.BASE_URL}/rooms`,room)
  }

  // delete room
  deleteRoom(id:any){
    // api call
    return this.http.delete(`${this.BASE_URL}/rooms/${id}`)
  }

  // edit room
  editRoom(id:any,room:RoomSchema){
    // api call
    return this.http.put(`${this.BASE_URL}/rooms/${id}`,room)
  }


}
