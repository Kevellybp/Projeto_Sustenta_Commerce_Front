import { Categorias } from "./Categorias"
import { Usuario } from "./Usuario"

export class Produtos{
    public id: number
    public nome: string
    public descricao: string
    public precoUnitario: number
    public foto: string
    public quantidade: string
    public categoria_produtos_criados: Categorias
    public usuario_produtos_criados: Usuario
}