import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { Icar } from './../../../interfaces/Icar';
import { Imarca } from './../../../interfaces/Imarca';
import { IResult } from './../../../interfaces/IResult';

const typecarpormarca: IResolvers = {
    car: {
        carpormarca: async ( root: Icar, __, context: {db: Db} ): Promise<Imarca[]> => {
            const datamarcas = await context.db.collection("marca").find().toArray() as Imarca[];
            const marcaList = datamarcas.filter( (marca) => marca.car.indexOf(root.codcoche) > -1 );
            return marcaList;
        }
    }
}

export default typecarpormarca;