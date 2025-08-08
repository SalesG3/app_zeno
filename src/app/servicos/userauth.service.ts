import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

export interface sessao {
  ID_USUARIO: number|null;
  NM_USUARIO: string|null;
}

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  sessao : sessao = {
    ID_USUARIO: null,
    NM_USUARIO: null
  }

  constructor() { }

  async requestLogin(userNumero : string, userSenha: string){
    try{
      let request = await fetch(environment.apiUrl + "/usuarios/login", {
        method: "POST",
        headers: {
          "Token": environment.token,
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          CD_USUARIO: userNumero,
          SENHA: userSenha
        })
      })

      if(request.status != 200){ console.log(request); return}

      let data = await request.json()

      return data
    }
    catch(err){
      console.log(err);
      return {
        sucesso: false,
        mensagem: "Erro interno. Favor entrar em contato com o suporte!"
      }
    }
  }

  setarSessao(sessao: sessao){
    this.sessao = sessao
  }

  pegarSessao(){
    if(this.sessao.ID_USUARIO == null){
      return undefined
    }

    return this.sessao
  }

  limparSessao(){
    this.sessao = {
      ID_USUARIO: null,
      NM_USUARIO: null
    }
  }

  async requestCadastro(userNumero:string, userNome:string, userSenha:string){
    try{
      let request = await fetch(environment.apiUrl + "/usuarios/cadastro", {
        method: "POST",
        headers: {
          "Token": environment.token,
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          CD_USUARIO: userNumero,
          NM_USUARIO: userNome,
          SENHA: userSenha
        })
      })

      if(request.status != 200){console.log(request); return}

      let data = await request.json()

      return data
    }
    catch(err){
      console.log(err)
      return false
    }
  }
}
