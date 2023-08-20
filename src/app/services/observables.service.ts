import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  public loadingSubject = new BehaviorSubject(false)

  public loadingObservable =  this.loadingSubject.asObservable()
  

  showLoader(){
    this.loadingSubject.next(true)
  }

  hideLoader(){
    this.loadingSubject.next(false)
  }


   nums = [1,2,3,4,5,'hi',6,7]
  observable = new Observable((obs)=>{
    this.nums.forEach(el => {
      if(typeof el !== 'number' ){
        obs.error(`error occured`)
      }
      obs.next(el)
    })
    obs.complete()
  })

  timerObservable = interval(1000)

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  apiCall(set:number){
    let tok = ['64b6518a9d312622a38124ef','64b65366b89b1e2299c09c4c']
    return this.http.get('https://api.jsonbin.io/v3/qs/'+tok[set],this.httpOptions)
  }

  constructor(private http : HttpClient) { }
}
