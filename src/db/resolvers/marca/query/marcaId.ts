import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca';

import { Db } from 'mongodb';

const querymarcaResolvers: IResolvers = {
    Query: {
      marcaId: async(_: void, args: {cifm: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("marca").findOne( {cifm: args.cifm} )
            .then( (marcaDocument) => {
              console.log(marcaDocument);
              return {
                status: true,
                message: "marca encontrado",
                datamar: marcaDocument as Imarca
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "marca no encontrado",
              }
            })
        }
    }
}

export default querymarcaResolvers;