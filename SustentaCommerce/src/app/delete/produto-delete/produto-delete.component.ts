import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
produto: Produtos = new Produtos()
idProduto: number
listaProdutos: Produtos[]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
    
  }
findByIdProduto(id: number){
this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
  this.produto = resp
})
}
apagar(){
  this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
    alert('apagou saporraaaaaaa')
    this.router.navigate(['/produtos'])
  })

}



}


