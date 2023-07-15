import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  books = [
    { title: 'Angular in Action', author: 'Jeremy Wilken', year: 2018, rating: 2.5 },
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008, rating: 4.7},
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', year: 1999, rating: 4.8 },
    { title: 'Effective TypeScript', author: 'Dan Vanderkam', year: 2020, rating: 9.2 }
  ];
  properties : string[] = []
  searchTerm:string = '';
  active = false
  addSearchProperties(property:string){
    this.active = !this.active
   if(this.properties.includes(property)){
    let index = this.properties.indexOf(property)
    this.properties.splice(index,1)
   }else{
    this.properties.push(property)
   }
  }
}
