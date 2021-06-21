import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  produto: Produtos = new Produtos()
  listaProdutos: Produtos[]
  user: Usuario = new Usuario()

  key = 'data'
  reverse = true


  constructor(
    private produtosService: ProdutosService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.findAllProdutos()
    this.findByIdUser()
  }

  
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(environment.id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }
}
