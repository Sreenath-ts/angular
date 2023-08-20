import { Component } from '@angular/core';
import { ObservablesService } from './services/observables.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  sub!:Subscription

obs = interval(100)

key = ''

 sampleArray:any[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    occupation: 'Web Developer',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    age: 40,
    occupation: 'Data Scientist',
  },
  {
    id: 4,
    name: 'Emily Brown',
    age: 22,
    occupation: 'UX Designer',
  },
  {
    id: 5,
    name: 'David Lee',
    age: 28,
    occupation: 'Product Manager',
  },
  {
    id: 6,
    name: 'Sarah Green',
    age: 35,
    occupation: 'Marketing Specialist',
  },
  {
    id: 7,
    name: 'Michael Wang',
    age: 33,
    occupation: 'Business Analyst',
  },
  {
    id: 8,
    name: 'Olivia Turner',
    age: 29,
    occupation: 'Graphic Designer',
  },
  {
    id: 9,
    name: 'William Clark',
    age: 27,
    occupation: 'Content Writer',
  },
  {
    id: 10,
    name: 'Sophia Martinez',
    age: 31,
    occupation: 'HR Manager',
  },
  {
    id: 11,
    name: 'Daniel Rodriguez',
    age: 26,
    occupation: 'Frontend Developer',
  },
  {
    id: 12,
    name: 'Ava Scott',
    age: 24,
    occupation: 'UX Researcher',
  },
  {
    id: 13,
    name: 'Ethan Nguyen',
    age: 32,
    occupation: 'Software Architect',
  },
  {
    id: 14,
    name: 'Isabella White',
    age: 23,
    occupation: 'Digital Marketing Specialist',
  },
  {
    id: 15,
    name: 'James Kim',
    age: 34,
    occupation: 'Product Designer',
  },
];

  constructor(private observableService:ObservablesService){
    // observableService.observable.subscribe(val => {
    //   console.log(val)
    // },(e) => console.log(e),
    // () => console.log('compeleted')
    
    // )
    // this.sub = observableService.timerObservable.subscribe(val => {
    //   console.log(val);
      
    // })
    // setTimeout(()=> {
    //   this.sub.unsubscribe()
    // },9000)
  }
}
