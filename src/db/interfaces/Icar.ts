enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface Icar {
    _id?: any;
    codcoche: string;
    nombre: string;
    modelo: string;
    precio: string;
    Combustible: string;
    descripcion: string;
    Ano: string;
    Kilometros: string;
    imagen: string;
    cifCA: string;
    cifm: string;
    marchas: string;
    Status: enumStatus;
   
}