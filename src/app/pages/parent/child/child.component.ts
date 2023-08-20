import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes?.['value'],'changes..');  
     this.inpChng = this.value;
  }
  @Input('val') value!:boolean;
  inpChng!:boolean;
}
