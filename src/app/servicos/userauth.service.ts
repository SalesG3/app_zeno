import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  sessao : object = {
    ID_USUARIO: null,
    NM_USUARIO: null
  }

  constructor() { }

  async requestLogin(userNumero : string, userSenha: string){
    try{
      let request = await fetch(environment.apiUrl + "/usuarios/auth", {
        method: "POST",
        headers: {
          "Token": environment.token,
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          userNumero: userNumero,
          userSenha: userSenha
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

  setarSessao(sessao: object){
    this.sessao = sessao
  }

  pegarSessao(){
    return this.sessao
  }

  limparSessao(){
    this.sessao = {
      ID_USUARIO: null,
      NM_USUARIO: null
    }
  }
}
