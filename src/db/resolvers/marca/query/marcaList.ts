import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca';
import { Db } from 'mongodb';

const querymarcaResolvers: IResolvers = {
    Query: {
      marcaList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<Imarca>> => { 
          const marcas = await context.db.collection("marca").find().toArray() as Array<Imarca>;
       
          return marcas;
        }
    }
}

export default querymarcaResolvers;