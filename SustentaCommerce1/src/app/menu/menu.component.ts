import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  idCategoria: number
  listaCategorias: Categorias[]
  categoria: Categorias = new Categorias()

  constructor(
    private router: Router, 
    public authService: AuthService,
    private categoriaService: CategoriasService
    ){}

  ngOnInit() {
    window.scroll(0,0);
    this.getAllCategorias();
  }

  sair() {
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.usuarioAdmnistrador = false
    environment.usuarioVendedor = false
    environment.id = 0
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categorias) =>{
      this.categoria = resp
    })
  }
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categorias[]) => {
      this.listaCategorias = resp
    })
  }

}
