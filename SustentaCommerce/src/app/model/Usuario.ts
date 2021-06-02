import { Produtos } from "./Produtos"

export class Usuario {
    public idUsuario: number
    public usuario: string
    public emailUsuario: string
    public senhaUsuario: string
    public usuarioVendedor: boolean
    public usuarioAdministrador: boolean
    public usuario_produto: Produtos[]
}