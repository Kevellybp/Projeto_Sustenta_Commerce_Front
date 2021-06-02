import { Categorias } from "./Categorias"
import { Usuario } from "./Usuario"

export class Produtos{
    public idProduto: number
    public descricaoProduto: string
    public precoUnitarioProduto: number
    public imagemProduto: string
    public quantidadeProduto: string
    public categoria_produtos_criados: Categorias[]
    public usuario_produtos_criados: Usuario
}