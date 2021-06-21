import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import {Categorias} from '../model/Categorias';
import {Produtos} from '../model/Produtos';
import {AuthService} from '../service/auth.service';
import {CategoriasService} from '../service/categorias.service';
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-produtos',
    templateUrl: './produtos-da-categoria.component.html',
    styleUrls: ['./produtos-da-categoria.component.css']
})
export class ProdutosDaCategoriaComponent implements OnInit {
    listaProdutos: Array<any> = []
    produto: Produtos = new Produtos()
    categoria: Categorias = new Categorias()


    constructor(
        public authService: AuthService,
        private categoriaService: CategoriasService,
        private route: ActivatedRoute,

    ) {}

    ngOnInit() {
        let departamentoProdutoRota = this.route.snapshot.paramMap.get('departamentoProduto')
        this.getProdutosDaCategoria(departamentoProdutoRota);
    }


    getProdutosDaCategoria(departamentoProduto: any) {
        this.categoriaService.getByDepartamentoCategorias(departamentoProduto).subscribe((resp: Categorias[]) => {
            let produtos = resp[0].categoria_produtos;
            this.listaProdutos = produtos;
        })
    }

    temProdutos(){
        let ok = true
        if(this.listaProdutos.length != 0){
            ok = true
            return ok
        }
        else{ok = false
            return ok}
    }

    semProdutos(){
        console.log(this.listaProdutos.length)
        let ok = false
        if(this.listaProdutos.length != 0){
            ok = false
            return ok
        }
        else{ok = true
            return ok}
    }

}
