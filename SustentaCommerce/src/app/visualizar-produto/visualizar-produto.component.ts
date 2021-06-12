import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    public authService: AuthService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findProdutoById(id)
  }


  findProdutoById(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
    })
  }
}
