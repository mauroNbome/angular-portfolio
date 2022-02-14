import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public isOpened: boolean = false;
  constructor() {}
}
