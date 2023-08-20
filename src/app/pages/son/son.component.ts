import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
enum Color {red='hi',green='kkk',blue='kkk'}
let c : Color = Color.blue;


@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class SonComponent implements OnInit {
  constructor(private cf : ChangeDetectorRef,private ngZone:NgZone){}
  @Input('inp') arr!:[number]
  num = 0;
ngOnInit(): void {
 let counter = 0;  
  this.ngZone.runOutsideAngular(()=>{
   
    setInterval(()=>{
      counter++;
      if(counter >= 10){
      this.ngZone.run(()=>{
        this.num = Math.ceil(Math.random() * 10)
      })
      }else{
        this.num = Math.ceil(Math.random() * 10)
      }
     // this.cf.markForCheck()
     },500)
  })
}

sonCall(){
  console.log('son');
  
  return 'SON'
}
}

