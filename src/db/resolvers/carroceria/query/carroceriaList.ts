import { IResolvers } from "@graphql-tools/utils";
import { Icarroceria } from '../../../interfaces/Icarroceria';
import { Db } from 'mongodb';

const querycarroceriaResolvers: IResolvers = {
    Query: {
      carroceriaList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<Icarroceria>> => { 
          const carrocerias = await context.db.collection("carrocerias").find().toArray() as Array<Icarroceria>;
       
          return carrocerias;
        }
    }
}

export default querycarroceriaResolvers;