import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }
  token = { 
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>('https://sustentacommerce.herokuapp.com/produtos', this.token)
  }
  getByIdProdutos(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`https://sustentacommerce.herokuapp.com/produtos/id/${id}`, this.token)
  }
  getByNomeProdutos(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`https://sustentacommerce.herokuapp.com/produtos/nome/${nome}`, this.token)
  }
  getProdutosByFullText(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`http://localhost:8080/produtos/pesquisar-produto`, {headers: new HttpHeaders().set('Authorization', environment.token), params: new HttpParams().set("nome", nome)})
  }
  getByPrecoUnitarioProdutos(precoUnitario: number): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`https://sustentacommerce.herokuapp.com/produtos/precoUnitario/${precoUnitario}`, this.token)
  }
  getByDescricaoProdutos(descricao: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`https://sustentacommerce.herokuapp.com/produtos/descricao/${descricao}`, this.token)
  }
  postProduto(produto: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>('https://sustentacommerce.herokuapp.com/produtos', produto, this.token)
  }
  putProduto(produto: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>('https://sustentacommerce.herokuapp.com/produtos', produto, this.token)
  }
  deleteProduto(id: number){
    return this.http.delete(`https://sustentacommerce.herokuapp.com/produtos/id/${id}`, this.token)
  }
}
