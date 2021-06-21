import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { environment } from 'src/environments/environment.prod';


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
    private route: ActivatedRoute,
    private alertas: AlertasService
    
  ) { }

  ngOnInit() {

    if(environment.usuarioVendedor != true) {
     this.alertas.showAlertInfo('Você precisa ser vendedor para acessar essa rota!')
      this.router.navigate(['/categorias'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)

  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categorias)=>{
      this.categoria = resp
    })

  }
  
  atualizarCategoria(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
     this.alertas.showAlertSucess('Categoria atualizada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

  }
