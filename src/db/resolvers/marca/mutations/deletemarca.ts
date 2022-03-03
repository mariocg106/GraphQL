import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const mutationDeletemarcaResolvers: IResolvers = {
    Mutation: {
        deletemarca: async(_: void, args: {cifm: string}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("marca").findOneAndDelete( {cifm: args.cifm} )
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "marca borrada con éxito",
                    }
                }).catch ( (error) => {
                    return { 
                        status: false,
                        message: `Error: ${error}`
                    }
                })
            return dataResult;
        }

    }

}

export default mutationDeletemarcaResolvers;