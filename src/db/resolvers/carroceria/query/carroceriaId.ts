import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icarroceria } from '../../../interfaces/Icarroceria';

import { Db } from 'mongodb';

const querycarroceriaResolvers: IResolvers = {
    Query: {
      carroceriaId: async(_: void, args: {cifCA: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("carrocerias").findOne( {cifCA: args.cifCA} )
            .then( (carroceriaDocument) => {
              console.log(carroceriaDocument);
              return {
                status: true,
                message: "carroceria encontrado",
                datacarr: carroceriaDocument as Icarroceria
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "carroceria no encontrado",
              }
            })
        }
    }
}

export default querycarroceriaResolvers;