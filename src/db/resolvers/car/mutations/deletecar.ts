import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const mutationDeletecarResolvers: IResolvers = {
    Mutation: {
        deletecar: async(_: void, args: {codcoche: string}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("car").findOneAndDelete( {codcoche: args.codcoche} )
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "car borrado con éxito",
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

export default mutationDeletecarResolvers;