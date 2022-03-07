import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { Imarca } from './../../../interfaces/Imarca'; 
import { Icar } from './../../../interfaces/Icar'; 


const typecarpormarca: IResolvers = {
    marca: {
        carpormarca: async ( marca: Imarca, __, context: {db: Db} ): Promise<Icar[]> => {
            
            const datacar = await context.db.collection("car").find().toArray() as Icar[];
            const carList = datacar.filter( (car) => car.cifm.indexOf(marca.cifm) > -1 );
            return carList;
        }
    }
}

export default typecarpormarca;