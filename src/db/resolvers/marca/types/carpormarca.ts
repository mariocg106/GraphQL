import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { Imarca } from './../../../interfaces/Imarca'; 
import { Icar } from './../../../interfaces/Icar'; 
import { IResult } from './../../../interfaces/IResult';

const typecarpormarca: IResolvers = {
    marca: {
        carpormarca: async ( root: Imarca, __, context: {db: Db} ): Promise<Icar[]> => {
            
            const datacar = await context.db.collection("car").find().toArray() as Icar[];
            const carList = datacar.filter( (car) => car.marca.indexOf(root.cifm) > -1 );
            return carList;
        }
    }
}

export default typecarpormarca;