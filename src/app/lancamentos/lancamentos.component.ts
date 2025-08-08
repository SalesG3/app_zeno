import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lancamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.css'
})
export class LancamentosComponent implements OnInit {
  DT_LANCAMENTO : string = new Date().toISOString().substring(0, 10)

  constructor(){ }

  ngOnInit(): void {
    let dialog = document.querySelector('#modal') as HTMLDialogElement
    
    dialog.showModal()
  }

  novoRegistro(){
    let dialog = document.querySelector('#modal') as HTMLDialogElement
    
    dialog.showModal()
  }

  salvarRegistro(){
    let dt = document.querySelector('#DT_LANCAMENTO') as HTMLInputElement


    console.log(dt.value)
  }
}
