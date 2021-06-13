import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { Produtos } from 'src/app/model/Produtos';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
produto: Produtos = new Produtos()
categoria: Categorias = new Categorias()
listaCategorias: Categorias[]
idCategoria: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if(environment.usuarioVendedor != true) {
      alert('Você precisa ser vendedor para acessar essa rota!')
      this.router.navigate(['/produtos'])
    }

    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategorias()
  }
findByIdProduto(id: number){
  this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
    this.produto = resp
  })
}
findByIdCategoria(){
  this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categorias)=>{
    this.categoria = resp
  })
}
findAllCategorias(){
  this.categoriaService.getAllCategorias().subscribe((resp: Categorias[])=>{
    this.listaCategorias = resp
  })
}
atualizarProduto(){
  this.categoria.id = this.idCategoria
  this.produto.categoria_produtos_criados = this.categoria

  this.produtoService.putProduto(this.produto).subscribe((resp: Produtos)=>{
this.produto = resp
this.alertas.showAlertInfo('Produto atualizado com sucesso!')
this.router.navigate(['/produtos'])
  })
}
}
