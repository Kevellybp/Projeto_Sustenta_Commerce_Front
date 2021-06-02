import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/menu'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.usuarioAdmnistrador = false
    environment.usuarioVendedor = false
    environment.id = 0
  }
}
