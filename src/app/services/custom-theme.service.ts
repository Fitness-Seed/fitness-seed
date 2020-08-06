import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  public color;
  constructor() {
   }
  public setTheme(c){
    this.color = c;
  }
  public getTheme(){
    return this.color;
  }
}
