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
        precio: (car: { precio: Icar }) => {
            return car.precio;
        },

        Kilometros: (car: { Kilometros: Icar }) => {
            return car.Kilometros;
        },

        Ano: (car: { Ano: Icar }) => {
            return car.Ano;
        },
        imagen: (car: { imagen: Icar }) => {
            return car.imagen;
        },
        cifCA: (car: { cifCA: Icar }) => {
            return car.cifCA;
        },
        cifm: (car: { cifm: Icar }) => {
            return car.cifm;
        },
        marchas: (car: { marchas: Icar }) => {
            return car.marchas;
        },
    }
    
}

export default typescarResolvers ;