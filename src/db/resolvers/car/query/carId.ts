import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icar } from '../../../interfaces/Icar';

import { Db } from 'mongodb';

const querycarResolvers: IResolvers = {
    Query: {
      carId: async(_: void, args: {codcoche: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("car").findOne( {codcoche: args.codcoche} )
            .then( (carDocument) => {
              console.log(carDocument);
              return {
                status: true,
                message: "car encontrado",
                datacar: carDocument as Icar
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "car no encontrado",
              }
            })
        }
    }
}

export default querycarResolvers;