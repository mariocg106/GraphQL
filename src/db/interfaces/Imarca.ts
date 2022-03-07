import { Icar } from "./Icar";

enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface Imarca {
    _id?: any;
    cifm: string;
    nombre: string;
    car: Array<Icar>;
    Status: enumStatus;
   
}