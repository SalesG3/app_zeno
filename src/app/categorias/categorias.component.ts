import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../servicos/categorias.service';
import { UserauthService } from '../servicos/userauth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  dataRow = {
    ID_USUARIO : 0    ,
    CD_CATEGORIA : '' ,
    NM_CATEGORIA : '' ,
    DS_CATEGORIA : '' ,
  }

  mensagem : string = ''
  dataGrid = []

  @ViewChild('form') form !: ElementRef
  @ViewChild('aviso') aviso !: ElementRef

  constructor(private servico : CategoriasService, private sessao : UserauthService, private router : Router){
    if(!this.sessao.pegarSessao()){
      this.router.navigate(['/login'])
      return
    }

    this.dataRow.ID_USUARIO = this.sessao.sessao.ID_USUARIO || 0
  }

  async ngOnInit() {
    this.dataGrid = await this.servico.gridCategoria(this.dataRow.ID_USUARIO)
    console.log(this.dataGrid)
  }


  novoRegistro(){
    this.form.nativeElement.showModal()
  }

  cancelarRegistro(){
    this.dataRow = {
      ID_USUARIO : this.dataRow.ID_USUARIO,
      CD_CATEGORIA : '' ,
      NM_CATEGORIA : '' ,
      DS_CATEGORIA : '' ,
    }
    
    this.form.nativeElement.close()
  }

  async salvarRegistro(){
    
    let data = await this.servico.novoCategoria(this.dataRow)

    if(data.sucesso){
      this.mensagem = data.mensagem
      this.form.nativeElement.close()
      this.aviso.nativeElement.showModal()
    }
    else{
      this.mensagem = data.mensagem
      this.aviso.nativeElement.showModal()
    }
    
  }

  fecharAviso(){
    this.dataRow = {
      ID_USUARIO : this.dataRow.ID_USUARIO,
      CD_CATEGORIA : '' ,
      NM_CATEGORIA : '' ,
      DS_CATEGORIA : '' ,
    }

    this.aviso.nativeElement.close()
  }
}
