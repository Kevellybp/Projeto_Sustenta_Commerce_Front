import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
    produto: Produtos = new Produtos()
    listaProdutos: Produtos[]
    idCategoria: number
    listaCategorias: Categorias[]
    categoria: Categorias = new Categorias()

    key = 'data'
    reverse = true

    

  constructor(
    private produtosService: ProdutosService,
    public authService: AuthService,
    private categoriaService: CategoriasService,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.findAllProdutos();
    this.findAllCategorias();
  }
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }
  cadastrarProduto(){
    this.produtosService.postProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
     this.alertas.showAlertSucess('Muito bem! Produto cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produtos()
    })
  }
  
  findByIdCategoria(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categorias) =>{
      this.categoria = resp
    })
  }
  findAllCategorias(){
    console.log(environment.token)
    this.categoriaService.getAllCategorias().subscribe((resp: Categorias[]) => {
      this.listaCategorias = resp
    })
  } 

}
