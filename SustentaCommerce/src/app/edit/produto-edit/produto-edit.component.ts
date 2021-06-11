import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { Produtos } from 'src/app/model/Produtos';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';

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
    private categoriaService: CategoriasService
  ) { }

  ngOnInit() {
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
alert('editou saporra')
this.router.navigate(['/produtos'])
  })
}
}
