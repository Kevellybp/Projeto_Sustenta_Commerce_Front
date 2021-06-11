import { Produtos } from "./Produtos"

export class Usuario {
    public id: number
    public nome: string
    public usuario: string
    public email: string
    public senha: string
    public usuarioVendedor: boolean
    public usuarioAdministrador: boolean
    public usuario_produto: Produtos[]
}