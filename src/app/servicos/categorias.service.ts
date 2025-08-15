import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  async novoCategoria(dataRow:object){

    let request = await fetch(environment.apiUrl + "/novo/categoria", {
      method: "POST",
      headers: {
        Token: environment.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataRow)
    })

    let data = await request.json()

    return data
  }

  async gridCategoria(ID_USUARIO:number){

    let request = await fetch(environment.apiUrl + "/grid/categoria/" + ID_USUARIO, {
      method: "GET",
      headers: {
        Token: environment.token,
        "Content-Type":"application/json"
      }
    })

    let data = await request.json()

    return data
  }
}
