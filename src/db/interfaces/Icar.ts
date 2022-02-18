enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface Icar {
    _id?: any;
    codcoche: string;
    nombre: string;
    modelo: string;
    Precio: number;
    Combustible: string;
    descripcion: string;
    Ano: string;
    Kilómetros: string;
    imagen: string;
    Status: enumStatus;
   
}