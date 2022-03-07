import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { Imarca } from './../../../interfaces/Imarca'; //book
import { Icar } from './../../../interfaces/Icar'; //people


const typecarpormarca: IResolvers = {
    marca: {
        bycarpormarca: async ( root: Imarca, __, context: {db: Db} ): Promise<Icar[]> => {
            const datacar = await context.db.collection("car").find().toArray() as Icar[];
            const carList = datacar.filter( (car) => car.cifm.indexOf(root.cifm) > -1 );
            return carList;
        }
    }
}

export default typecarpormarca;