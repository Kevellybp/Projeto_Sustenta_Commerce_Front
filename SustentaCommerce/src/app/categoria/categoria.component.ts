import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from '../model/Categorias';
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
    private categoriasService: CategoriasService
    ) { }

  ngOnInit() {
  }

  findAllCategorias(){
    this.categoriasService.getAllCategorias().subscribe((resp: Categorias[])=>{
this.listaCategorias = resp
    })
  }
  cadastrar(){
    this.categoriasService.postCategorias(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categorias ()
    })
  }

}
