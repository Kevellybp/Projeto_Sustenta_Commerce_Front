import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome

  listaCategorias: Categorias[] 

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.usuarioAdmnistrador = false
    environment.usuarioVendedor = false
    environment.id = 0
  }
}
