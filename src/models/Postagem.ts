import Tema from "./Tema";
import Usuario from "./Usuario";


export default interface Postagem {
    id: number;
    texto: string;
    data: Date;
    tema: Tema | null;  
    usuario: Usuario | null;
}