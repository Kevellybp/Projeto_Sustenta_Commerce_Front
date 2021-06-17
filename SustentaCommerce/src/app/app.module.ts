import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FormsModule } from '@angular/forms';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';
import { ProdutosPesquisaComponent } from './produtos_pesquisa/produtosPesquisa.component';
import { DoarMaterialComponent } from './doar-material/doar-material.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    ProdutosComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    AlertasComponent,
    VisualizarProdutoComponent,
    ProdutosPesquisaComponent,
    DoarMaterialComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
