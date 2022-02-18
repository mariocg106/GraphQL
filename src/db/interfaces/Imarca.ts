enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface Imarca {
    _id?: any;
    cifm: string;
    nombre: string;
    Status: enumStatus;
   
}