import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const mutationDeletecarroceriaResolvers: IResolvers = {
    Mutation: {
        deletecarroceria: async(_: void, args: {cifCA: string}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("carroceria").findOneAndDelete( {cifCA: args.cifCA} )
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "carroceria borrada con éxito",
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

export default mutationDeletecarroceriaResolvers;