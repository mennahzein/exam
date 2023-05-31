import { Injectable } from '@angular/core';
import { Data } from '../model/app.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setUser(user: Data) {
    localStorage.setItem("user", JSON.stringify(user));
  }

}
