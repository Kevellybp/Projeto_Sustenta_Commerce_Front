import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario
  confirmarSenha: string

  nomeValido: boolean = false;
  emailValido: boolean = false;
  senhaValida: boolean = false;
  usuarioValido: boolean = false;

  constructor(private authService: AuthService,
     private router: Router,
     private alertas: AlertasService
     ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.user.usuarioVendedor = event.target.value
  }

  cadastrar() {

    if(this.user.senha != this.confirmarSenha) {
     this.alertas.showAlertDanger('As senhas estão incorretas')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp : Usuario) => {
        this.user = resp
        this.router.navigate(['/entrar'])
       this.alertas.showAlertSucess('Usuário cadastrado com sucesso!')
      })
    }
  }

  validacao(condicao: boolean, event:any){
    let valid = false;
    if(condicao){
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    }else{
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
      valid = true;
    }
    return valid;
  }

  validaNome(event: any){
    this.nomeValido = this.validacao(event.target.value.length < 3, event);
  }

  validaEmail(event: any){
    this.emailValido = this.validacao(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event);
  }

  validaUsuario(event: any){
    this.usuarioValido = this.validacao(event.target.value.length < 3, event);
  }
}