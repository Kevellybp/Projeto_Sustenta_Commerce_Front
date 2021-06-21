import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  carrinho: Produtos[]
  quantidade: number
  valor: number
  idUsuario: number = environment.id

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    public authService: AuthService,
    private router: Router,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findProdutoById(id)
    this.quantidade = 1
    this.valor = this.produto.precoUnitario
  }


  findProdutoById(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
    })
  }

  addToCart() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]')

    this.carrinho.push(
      {
        id: this.produto.id,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        foto: this.produto.foto,
        quantidade: this.produto.quantidade,
        precoUnitario: this.produto.precoUnitario,
        categoria_produtos_criados: this.produto.categoria_produtos_criados,
        usuario_produtos_criados: this.produto.usuario_produtos_criados
      })
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
   this.alertas.showAlertSucess('Produto adicionado ao carrinho')
    this.router.navigate(['/inicio'])
  }

  autor() {
    let ok:boolean = false

    if(this.produto.usuario_produtos_criados.id == this.idUsuario){
    ok = true
      
    }

    return ok
  }
}
