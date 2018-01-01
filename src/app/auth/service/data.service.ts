import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  private _TOKEN = 'TOKEN';
  private _ROLE = 'ROLE';

  constructor() {
  }


  setTOKEN(value: string) {
    localStorage.setItem(this._TOKEN, value);
  }

  setROLE(value: string) {
    localStorage.setItem(this._ROLE, value);
  }

  getToken(): string {
    return localStorage.getItem(this._TOKEN);
  }

  getRole(): string {
    return localStorage.getItem(this._ROLE);
  }

  clear(): boolean {
    localStorage.clear();
    return true;
  }
}
