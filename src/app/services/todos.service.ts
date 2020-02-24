import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  public prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = 'https://jsonplaceholder.typicode.com/todos';
    // Prepare the request
    return this.http.get(dataUrl);
  }
}
