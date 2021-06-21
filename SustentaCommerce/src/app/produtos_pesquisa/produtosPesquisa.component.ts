import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import {Produtos} from '../model/Produtos';
import {AlertasService} from '../service/alertas.service';
import {AuthService} from '../service/auth.service';
import {ProdutosService} from '../service/produtos.service';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriasService} from "../service/categorias.service";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-produtos-pesquisa',
    templateUrl: './produtosPesquisa.component.html',
    styleUrls: ['./produtosPesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {
    produto: Produtos = new Produtos()
    listaProdutos: Produtos[]
    idCategoria: number
    nomeProdutoRouteParam: String = ""

    key = 'data'
    reverse = true
    static listaProdutos: Produtos[];
    private sub: Subscription;


    constructor(
        public authService: AuthService,
        private produtosService: ProdutosService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        const nomeProdutoRouteParam = this.route.snapshot.paramMap.get('nome')
        this.getProdutosByNome(nomeProdutoRouteParam);
        this.sub = this.route.params.subscribe(params => {
            this.getProdutosByNome(params['nome']);
        })
    }

    reloadWithNewId(id: number) {
        this.router.navigateByUrl(`/produtos/nome/${this.nomeProdutoRouteParam}`);
    }

    onChangePesquisaProduto(event: any) {
        this.nomeProdutoRouteParam = event.target.value
    }

    getProdutosByNome(nome: any) {
        this.produtosService.getByNomeProdutos(nome).subscribe((resp: Produtos[]) => {
            this.listaProdutos = resp
        })
    }

    temProdutos() {
        let ok = true
        if (this.listaProdutos.length != 0) {
            ok = true
            return ok
        } else {
            ok = false
            return ok
        }
    }

    semProdutos() {
        let ok = false
        if (this.listaProdutos.length != 0) {
            ok = false
            return ok
        } else {
            ok = true
            return ok
        }
    }

}
