import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doar-material',
  templateUrl: './doar-material.component.html',
  styleUrls: ['./doar-material.component.css']
})
export class DoarMaterialComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  btnDoar(){
    alert('Obrigado por ajudar nosso vendedor!!')
    this.router.navigate(['/inicio'])
  }

}
