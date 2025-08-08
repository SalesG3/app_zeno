import { Component } from '@angular/core';
import { UserauthService } from '../servicos/userauth.service';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercadastro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './usercadastro.component.html',
  styleUrl: './usercadastro.component.css'
})
export class UsercadastroComponent {
  userNumero : string = ''
  userNome : string = ''
  userSenha : string = ''
  mensagem : string = ''

  constructor(private userAuth : UserauthService, private router : Router){ }

  async submitCadastro(){
    this.mensagem = ''
    let response = await this.userAuth.requestCadastro(this.userNumero,this.userNome,this.userSenha)

    if(response.sucesso == false){
      this.mensagem = response.mensagem
      return
    }

    if(response.sucesso == true){
      alert(response.mensagem)
      this.router.navigate(['/login'])
    }

  }
}
