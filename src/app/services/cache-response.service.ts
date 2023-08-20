import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheResponseService {

  storage = new Map()

  get(key:string){
    return this.storage.get(key)
  }

  set(key:string,value:any){
    this.storage.set(key,value)
  }

  constructor() { }
}
