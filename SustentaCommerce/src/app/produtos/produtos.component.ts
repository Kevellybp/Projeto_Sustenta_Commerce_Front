import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';
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
    user: Usuario = new Usuario()
    idUser: number
    nomeProduto: string
    nomeCategoria: string



    categoriaEscolhida: Categorias = new Categorias()  
    idCategoriaEscolhida: number
    departamentoProdutoCategoriaEscolhida: string
  
  

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
    this.findByIdUser();
    console.log(this.user);
  }
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }
  cadastrarProduto(){
    
    this.produto.categoria_produtos_criados = this.categoria
    this.produto.categoria_produtos_criados.id = this.idCategoriaEscolhida;
    this.produto.categoria_produtos_criados.departamentoProduto = this.departamentoProdutoCategoriaEscolhida;

    this.findByIdUser();
    this.produto.usuario_produtos_criados = this.user
    this.produto.usuario_produtos_criados.id = this.user.id
    this.produto.usuario_produtos_criados.nome = this.user.nome
    this.produto.usuario_produtos_criados.email = this.user.email
    this.produto.usuario_produtos_criados.senha = this.user.senha
    this.produto.usuario_produtos_criados.usuario = this.user.usuario
    this.produto.usuario_produtos_criados.usuarioVendedor = this.user.usuarioVendedor
    this.produto.usuario_produtos_criados.usuarioAdministrador = this.user.usuarioAdministrador
    

    
    this.produtosService.postProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      this.alertas.showAlertSucess('Muito bem! Produto cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produtos()
    })
  }

  
  findByIdCategoria(evt: any){

    this.idCategoriaEscolhida = evt.target.value;
    this.categoriaService.getByIdCategorias(this.idCategoriaEscolhida).subscribe((resp: Categorias)=>{
      this.categoriaEscolhida = resp
      this.departamentoProdutoCategoriaEscolhida = resp.departamentoProduto
    });

  }


  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categorias[]) => {
      this.listaCategorias = resp
    })
  } 

  findByIdUser(){
    this.authService.getByIdUser(environment.id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  findByNomeProduto(){
    if(this.nomeProduto == ''){
      this.findAllProdutos()
    } else {
      this.produtosService.getByNomeProdutos(this.nomeProduto).subscribe((resp: Produtos[]) => {
        this.listaProdutos = resp
      })
    }
  }

  findByNomeCategoria(){
    if(this.nomeCategoria == ''){
      this.findAllCategorias()
    } else {
      this.categoriaService.getByDepartamentoCategorias(this.nomeCategoria).subscribe((resp: Categorias[]) => {
        this.listaCategorias = resp
      })
    }
  }

}
