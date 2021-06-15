import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pesquisaParam = ""
  nome = environment.nome
  idCategoria: number
  listaCategorias: Categorias[]
  listaProdutos: Produtos[]
  categoria: Categorias = new Categorias()
  produtos: Produtos = new Produtos()




  constructor(
    private router: Router, 
    public authService: AuthService,
    private categoriaService: CategoriasService,
    private produtosService: ProdutosService


    ){}

  ngOnInit() {
    window.scroll(0,0);
    this.getAllCategorias();
  }

  sair() {
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.usuarioAdministrador = false
    environment.usuarioVendedor = false
    environment.id = 0
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categorias) =>{
      this.categoria = resp
    })
  }
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categorias[]) => {
      this.listaCategorias = resp
    })
  }

  onChangePesquisaProduto(event: any) {
    this.pesquisaParam = event.target.value
  }
  getProdutosFullText(){
    this.produtosService.getProdutosByFullText(this.pesquisaParam).subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp
      this.router.navigate(['/produtos/pesquisar-produto'])
    })
  }

}
