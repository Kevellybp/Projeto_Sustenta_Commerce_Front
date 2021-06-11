import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
categoria: Categorias = new Categorias()
idCategoria: number


  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  
  ) { }

  ngOnInit()  {
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
    
  }
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategorias(id).subscribe((resp:Categorias)=>{
      this.categoria = resp
    })
  }
  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }
}
