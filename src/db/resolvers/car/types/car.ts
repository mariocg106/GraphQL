import { Icar } from '../../../interfaces/Icar';
import { IResolvers } from "@graphql-tools/utils";

const typescarResolvers: IResolvers = {
    car :{
        nombre: (root: Icar) => {
            return root.nombre === undefined;
        },

        modelo: (root: { modelo: Icar }) => {
            return root.modelo === undefined;
        },
        Precio: (root: { Precio: Icar }) => {
            return root.Precio === undefined
        },

        Kilometros: (root: { kilometros: Icar }) => {
            return root.kilometros === undefined
        },

        Ano: (root: { Ano: Icar }) => {
            return root.Ano === undefined
        },
    }
    
}

export default typescarResolvers ;