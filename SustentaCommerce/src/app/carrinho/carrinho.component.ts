import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Produtos = new Produtos()
  carrinho: Produtos[]
  precoParcial: number
  precoTotal: number
  quantidade: number
  valorCarrinho = {
    valor: 0
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == "") {
      alert('Você deve fazer o login para acessr o carrinho')
      this.router.navigate(["/entrar"])
    }

    this.exibirCarrinho()
    this.totalPagar()
  }

  exibirCarrinho() {
    const localS = localStorage['carrinho']
    if (localS.length > 0) {
      this.carrinho = localS ? JSON.parse(localS) : []
    } else {
      this.precoTotal = 0
    }
  }

  totalPagar() {
    this.precoTotal = 0
    let dadosProduto = []
    dadosProduto = JSON.parse(localStorage.getItem('carrinho') || '{}')
    dadosProduto.forEach((i: any) => {
      this.valorCarrinho = {
        valor: i.valorParcial
      }


      this.precoTotal += this.valorCarrinho.valor
    })
    return this.precoTotal.toFixed(2)
  }
  
}
