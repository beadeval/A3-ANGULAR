// Clase que guarda los atributos de un Videojuegp
export class Videojuego{

    private _id : number = 0;
    private static contadorId : number = 1;
    private _titulo : String = "";
    private _compania : String = "";
    private _imagen : String = "";
    private _valoracion : String = "";



constructor (titulo : String, compania : String, imagen : String, valoracion : String ) {
    this._id = Videojuego.contadorId++;
    this._titulo = titulo;
    this._compania = compania;
    this._imagen = imagen;
    this._valoracion = valoracion;

}

public get id(): number {
    return this._id;
}

public get titulo(): String {
    return this._titulo;
}


public get compania(): String {
    return this._compania;
}


public get valoracion(): String {
    return this._valoracion;
}


public get imagen(): String {
    return this._imagen;
}

public toString(): string {
    return `ID: ${this._id}, Titulo: ${this.titulo}, Compania: ${this.compania}, Valoracion: ${this.valoracion}, Imagen: ${this.imagen}`
}

}




