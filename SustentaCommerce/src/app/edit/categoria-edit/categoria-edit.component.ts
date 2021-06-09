import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { CategoriasService } from 'src/app/service/categorias.service';


@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
categoria: Categorias = new Categorias()

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)

  }

  findByIdCategoria(id: number){
    this;this.categoriaService.getByIdCategorias(id).subscribe((resp: Categorias)=>{
      this.categoria = resp
    })

  }
  
  atualizarCategoria(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      alert('Categoria atualizada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

  }
