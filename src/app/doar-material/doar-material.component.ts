import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-doar-material',
  templateUrl: './doar-material.component.html',
  styleUrls: ['./doar-material.component.css']
})
export class DoarMaterialComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(): void {
  }

  btnDoar(){
   this.alertas.showAlertSucess('Obrigado por ajudar nosso vendedor!!')
    this.router.navigate(['/inicio'])
  }

}
