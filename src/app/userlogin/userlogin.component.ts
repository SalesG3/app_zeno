import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';

import { environment } from '../../environments/environment.development';
import { UserauthService } from '../servicos/userauth.service';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  userNumero : string = ''
  userSenha : string = ''
  mensagem : string = ''

  constructor(private userAuth : UserauthService){ }

  async submitLogin(){
    let response = await this.userAuth.requestLogin(this.userNumero, this.userSenha)

    if(response.sucesso == false){
      this.mensagem = response.mensagem
      return
    }

    
  }
}
