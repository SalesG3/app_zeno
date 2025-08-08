import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../servicos/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {

  constructor(private userAuth : UserauthService, private router : Router){ }

  ngOnInit(): void {
    if(!this.userAuth.pegarSessao()){
      this.router.navigate(['/login'])
    }
  }
}
