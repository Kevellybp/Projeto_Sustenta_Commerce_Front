import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component'
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
