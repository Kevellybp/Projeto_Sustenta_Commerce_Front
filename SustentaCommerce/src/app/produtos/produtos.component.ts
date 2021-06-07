import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../model/Produtos';
import { AuthService } from '../service/auth.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
    produto: Produtos = new Produtos
    listaProdutos: Produtos[]

  constructor(private router: Router,
    private produtosService: ProdutosService,
    public authService: AuthService    
    ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.findAllProdutos();
  }
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }
  cadastrarProduto(){
    this.produtosService.postProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      alert('Muito bem! Produto cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produtos()
    })
  }

}
