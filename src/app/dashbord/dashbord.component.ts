import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../servicos/userauth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {
  NM_USUARIO : string = ''

  constructor(private userAuth : UserauthService, private router : Router){ }

  ngOnInit(): void {
    if(!this.userAuth.pegarSessao()){
      this.router.navigate(['/login'])
    }

    this.NM_USUARIO = this.userAuth.sessao.NM_USUARIO || "";
  }
}
