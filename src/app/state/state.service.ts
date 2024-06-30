import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: any = {};
  
  constructor() { }

  setState(key: string, value: any) {
    this.state[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
  }

  getState(key: string): any {
    if (!this.state[key]) {
      this.state[key] = JSON.parse(localStorage.getItem(key) || '{}');
    }
    return this.state[key];
  }

  clearState(key: string) {
    delete this.state[key];
    localStorage.removeItem(key);
  }
}
