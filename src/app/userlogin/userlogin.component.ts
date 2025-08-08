import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterLink, Router } from '@angular/router';
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

  constructor(private userAuth : UserauthService, private router : Router){ }

  async submitLogin(){
    let response = await this.userAuth.requestLogin(this.userNumero, this.userSenha)

    if(response.sucesso == false){
      this.mensagem = response.mensagem
      return
    }

    if(response.sucesso == true){
      this.userAuth.setarSessao(response.data[0])
      this.router.navigate(['/dashbord'])
    }
  }
}
