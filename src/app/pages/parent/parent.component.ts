import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
value = false;
constructor(){
  setTimeout(()=>{
    this.value = !this.value;
  },6000)
}
array = [{
  name:'sree',
  id:1
},
{
  name:'sreen',
  id:2
},{
  name:'sreena',
  id:3
},{
  name:'sreenat',
  id:4
},{
  name:'sreenath',
  id:5
},{
  name:'sreenatht',
  id:6
},{
  name:'sreenathts',
  id:7
}]

track(index:Number,user:any){
   return user.id;
}

assData(){
  this.array = [{
    name:'sree',
    id:1
  },
  {
    name:'sreen',
    id:2
  },{
    name:'sreena',
    id:3
  },{
    name:'sreenat',
    id:4
  },{
    name:'sreenath',
    id:5
  },{
    name:'sreenatht',
    id:6
  },{
    name:'sreenathts',
    id:7
  }]
}
}
