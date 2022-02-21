import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  // Variable to handle sidenav
  public isOpened: boolean = false;

  constructor() {}
}
