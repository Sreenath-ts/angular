import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandpa',
  templateUrl: './grandpa.component.html',
  styleUrls: ['./grandpa.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class GrandpaComponent implements OnInit {
  arr :any = []
value = 'some'
ngOnInit(): void {
  // setInterval(()=>{
  //   this.arr = [Math.random()]
  // },1000)
}
Grandpacall(){
return this.value
}
}
