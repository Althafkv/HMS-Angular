import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allRooms:any[],searchkey:string,propertyname:string): any[] {
    const result:any = []
    if(!allRooms || searchkey=="" || propertyname==""){
      return allRooms
    }
    allRooms.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(item)
      }
    })

    return result;
  }

}
