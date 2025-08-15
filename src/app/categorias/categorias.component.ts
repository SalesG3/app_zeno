import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriasService, Categoria } from '../servicos/categorias.service';
import { UserauthService } from '../servicos/userauth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent implements OnInit{

  somenteLeitura = false
  salvarEditando = false
  
  dataRow = {
    ID_USUARIO : 0    ,
    CD_CATEGORIA : '' ,
    NM_CATEGORIA : '' ,
    DS_CATEGORIA : '' ,
  }

  usuario : string = ''
  mensagem : string = ''
  dataGrid : Array< Categoria >  = [ ]

  @ViewChild('form') form !: ElementRef
  @ViewChild('aviso') aviso !: ElementRef

  constructor(private servico : CategoriasService, private sessao : UserauthService, private router : Router){
    if(!this.sessao.pegarSessao()){
      this.router.navigate(['/login'])
      return
    }

    this.usuario = this.sessao.sessao.NM_USUARIO || ''
    this.dataRow.ID_USUARIO = this.sessao.sessao.ID_USUARIO || 0
  }

  async ngOnInit() {
    this.dataGrid = await this.servico.gridCategoria(this.dataRow.ID_USUARIO)
  }


  novoRegistro(){
    this.form.nativeElement.showModal()
    this.somenteLeitura = false
  }

  async excluirRegistro(ID_CATEGORIA:number){
    let data = await this.servico.deleteCategoria(ID_CATEGORIA)

    if(data.sucesso){
      this.dataGrid = await this.servico.gridCategoria(this.dataRow.ID_USUARIO)
      this.mensagem = data.mensagem
      this.aviso.nativeElement.showModal()
    }
    else{
      this.mensagem = data.mensagem
      this.aviso.nativeElement.showModal()
    }
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
      this.dataGrid = await this.servico.gridCategoria(this.dataRow.ID_USUARIO)
      this.mensagem = data.mensagem
      this.form.nativeElement.close()
      this.aviso.nativeElement.showModal()

      this.dataRow = {
        ID_USUARIO : this.dataRow.ID_USUARIO,
        CD_CATEGORIA : '' ,
        NM_CATEGORIA : '' ,
        DS_CATEGORIA : '' ,
      }

    }
    else{
      this.mensagem = data.mensagem
      this.aviso.nativeElement.showModal()
    }
    
  }

  fecharAviso(){
    this.aviso.nativeElement.close()
  }

  async consultaRegistro(ID_CATEGORIA:number){
    let data = await this.servico.consultaCategoria(ID_CATEGORIA)

    this.dataRow = data[0]
    this.form.nativeElement.showModal()
    this.somenteLeitura = true
  }
}
