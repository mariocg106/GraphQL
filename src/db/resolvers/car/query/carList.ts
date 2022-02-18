import { IResolvers } from "@graphql-tools/utils";
import { Icar } from '../../../interfaces/Icar';
import { Db } from 'mongodb';

const querycarResolvers: IResolvers = {
    Query: {
      carList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<Icar>> => { 
          const cars = await context.db.collection("car").find().toArray() as Array<Icar>;
       
          return cars;
        }
    }
}

export default querycarResolvers;