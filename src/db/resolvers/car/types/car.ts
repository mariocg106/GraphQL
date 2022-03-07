import { Icar } from '../../../interfaces/Icar';
import { IResolvers } from "@graphql-tools/utils";

const typescarResolvers: IResolvers = {
    car :{
        nombre: (car: Icar) => {
            return car.nombre;
        },

        modelo: (car: { modelo: Icar }) => {
            return car.modelo;
        },
        Precio: (car: { Precio: Icar }) => {
            return car.Precio;
        },

        Kilometros: (car: { kilometros: Icar }) => {
            return car.kilometros;
        },

        Ano: (car: { Ano: Icar }) => {
            return car.Ano;
        },
    }
    
}

export default typescarResolvers ;