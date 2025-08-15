import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

export interface Categoria {
  ID_CATEGORIA  : number
  ID_USUARIO    : number
  CD_CATEGORIA  : number
  NM_CATEGORIA  : string
  DS_CATEGORIA  : string
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  headers = {
    Token: environment.token,
    "Content-Type":"application/json"
  }

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

  async deleteCategoria(ID_CATEGORIA:number){
    
    let request = await fetch(environment.apiUrl + "/delete/categoria/" + ID_CATEGORIA, {
      method: "DELETE",
      headers: {
        Token: environment.token,
        "Content-Type": "application/json"
      }
    })

    let data = await request.json()

    return data
  }

  async consultaCategoria(ID_CATEGORIA:number){

    let request = await fetch(environment.apiUrl + "/consulta/categoria/" + ID_CATEGORIA, {
      method: "GET",
      headers: {
        token: environment.token,
        "Content-Type":"application/json"
      }
    })

    let data = await request.json()

    return data
  }

  async alteraCategoria(ID_CATEGORIA:number, dataRow:object){

    let request = await fetch(environment.apiUrl + "/altera/categoria/" + ID_CATEGORIA, {
      method: "PUT",
      headers: {
        token : environment.token,
        "Content-Type":"application/json"
      },
      body: JSON.stringify(dataRow)
    })

    let data = await request.json()
    
    return data
  }
}
