import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HelloService {

  constructor(private http: Http) { }

  getWelcomeMessage() {
    return this.http.get('http://localhost:8000/api/v0.1/greeting').map(
      (response: Response) => {
        const welcome = response.json();
        return welcome;
      }
    );
  }


}
