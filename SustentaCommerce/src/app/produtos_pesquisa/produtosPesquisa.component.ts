import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtosPesquisa.component.html',
  styleUrls: ['./produtosPesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
    produto: Produtos = new Produtos()
    listaProdutos: Produtos[]
    idCategoria: number
    listaCategorias: Categorias[]
    categoria: Categorias = new Categorias()
    pesquisaParam = ""

    key = 'data'
    reverse = true

    

  constructor(
    private produtosService: ProdutosService,
    public authService: AuthService,
    private categoriaService: CategoriasService,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    
  }

  onChangePesquisaProduto(event: any) {
    this.pesquisaParam = event.target.value
  }

  getProdutosFullText(){
    this.produtosService.getProdutosByFullText(this.pesquisaParam).subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp
      
    })
  }
  
}
