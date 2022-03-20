import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  sendMessage(): any {
    const mockAPIResponse = {
      status: 'ok',
      message: 'Your message was succesfully sent, thanks.',
    };

    return of(mockAPIResponse);
  }
}
