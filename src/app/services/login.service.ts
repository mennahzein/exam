import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import userData from '../json/login.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private localStorageService: LocalStorageService) { }

  getUser(email: string, password: string) {
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].password === password) {
        this.localStorageService.setUser(userData[i]);
        return true;
      }
    }
    return false;
  }
}
