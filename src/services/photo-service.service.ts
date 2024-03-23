import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';


@Injectable({
  providedIn: 'root',
  
})
export class PhotoServiceService {

  #ulr = 'https://jsonplaceholder.typicode.com/photos/';
  constructor(private _http: HttpClient) { }

  getAll(): Observable<Photo[]> {
    return this._http.get<Photo[]>(this.#ulr)
  }
}

