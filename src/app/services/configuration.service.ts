import { Injectable } from '@angular/core';

const CONFIG_KEY = 'showSlide';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getConfigData() {
    return JSON.parse(localStorage.getItem(CONFIG_KEY));
  }

  deleteConfigData() {
    return localStorage.removeItem(CONFIG_KEY);
  }

  setConfigData(show: boolean) {
    const config = { showSlide: show ? show : false };
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }

}
