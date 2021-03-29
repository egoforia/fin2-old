import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@fin2/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getHello(): Promise<Message> {
    return this.http.get<Message>('/api/hello')
            .toPromise();
  }
}
