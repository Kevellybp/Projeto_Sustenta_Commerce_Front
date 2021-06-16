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
  precoTotal: number
  quantidade = 1
  carrinhoValor = {
    valor: 0
  }

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Você precisa fazer login para acessar o carrinho')
      this.router.navigate(['/entrar'])
    }
    window.scroll(0,0)
    this.comprasNoCarrinho()
    this.total()
  }

  comprasNoCarrinho() {
    const localS = localStorage['carrinho']
    if (localS.length > 0) {
      this.carrinho = localS ? JSON.parse(localS) : []
    } else {
      this.precoTotal = 0
    }
  }



  total() {
    this.precoTotal = 0
    let dadosProd = []
    dadosProd = JSON.parse(localStorage.getItem('carrinho') || '{}')
    dadosProd.forEach((i: any) => {
      this.precoTotal += this.carrinhoValor.valor
    })
    return this.precoTotal
  }

  

  
}
