import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
   GenerateToken() {
    const character: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token: string = ''; 

    for(let i = 0; i<6; i ++ ){
      const randomIndex = Math.floor(Math.random() * character.length);
      token += character[randomIndex]
    }
    return  token;
  }
  constructor() { }
}