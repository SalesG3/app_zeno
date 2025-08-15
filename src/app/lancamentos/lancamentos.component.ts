import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserauthService } from '../servicos/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.css'
})
export class LancamentosComponent implements OnInit {
  DT_LANCAMENTO : string = new Date().toISOString().substring(0, 10)
  TP_LANCAMENTO : string = ''
  ID_CATEGORIA : string = ''
  DS_LANCAMENTO : string = ''
  VL_LANCAMENTO : string = ''

  constructor(private userAuth : UserauthService, private router : Router){ }

  ngOnInit(): void {
    if(!this.userAuth.pegarSessao()){
      // this.router.navigate(['/login'])
    }
  }

  novoRegistro(){
    let dialog = document.querySelector('.modal') as HTMLDialogElement
    
    dialog.showModal()
  }

  salvarRegistro(){
    let dialog = document.querySelector('.modal') as HTMLDialogElement
    
    dialog.close()
  }
}
