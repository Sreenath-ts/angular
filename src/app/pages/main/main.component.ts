import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit {
constructor(private activateRoute:ActivatedRoute,private service:ObservablesService,private renderer : Renderer2,private elementRef:ElementRef){
}
@ViewChild('referenceDiv') divElement !: ElementRef<HTMLDivElement>
  ngAfterViewInit(): void {
    console.log(this.divElement,'div');
    const div = this.elementRef.nativeElement.querySelector("#myDiv")
    console.log(div,'hahfuuhfuywg');
    
    this.changeColor(div)
   this.renderer.setStyle(this.divElement.nativeElement,'background-color', 'blue')
  }

  changeColor(element:any){
    this.renderer.setStyle(element,'background-color', 'yellow')
  }

subject!:Observable<boolean>
data = {}
  ngOnInit(): void {
   
      this.activateRoute.data.subscribe(data => console.log(data,'ghguguhg'))
      this.subject = this.service.loadingObservable
  }
  set = 0;
  api(){
   
    this.set = this.set == 0 ? 1 : 0
    console.log(this.set,'set');
    
    this.service.apiCall(this.set).subscribe((data)=> {
      console.log(data,'response');
      this.data = data
    })
  }
}
