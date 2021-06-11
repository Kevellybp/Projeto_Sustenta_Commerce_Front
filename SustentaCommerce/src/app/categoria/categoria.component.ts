import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from '../model/Categorias';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
categoria: Categorias = new Categorias()
listaCategorias: Categorias[]


  constructor(private router: Router,
    private categoriasService: CategoriasService,
    public authService: AuthService
    ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.findAllCategorias();
  }

  findAllCategorias(){
    this.categoriasService.getAllCategorias().subscribe((resp: Categorias[])=>{
    this.listaCategorias = resp
    })
  }
  cadastrarCategoria(){
    this.categoriasService.postCategorias(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categorias ()
    })
  }

}
