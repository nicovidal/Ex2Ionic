import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PosteosService {

  constructor(private httpClient:HttpClient) { }

  getTopPost(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')

  }


}
