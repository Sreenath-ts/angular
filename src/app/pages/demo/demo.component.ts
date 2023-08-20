import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
   books = [
    { title: 'Angular in Action', author: 'Jeremy Wilken', year: 2018 },
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', year: 1999 },
    { title: 'Effective TypeScript', author: 'Dan Vanderkam', year: 2020 }
  ];

  sort = 'hi'

  constructor(){
    let num = 0

    // setInterval(()=>{
    //   this.sort = ['title','year','author'][num] 
    //   num++;
    //   if(num==3) num = 0
    // } ,9000 )
  }
  
}
