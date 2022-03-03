import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca';
import { Db } from 'mongodb';

const mutationUpdatemarcaResolvers: IResolvers = {
    Mutation: {
        updatemarca: async(_: void, args: {cifm: string ,marca: Imarca}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("marca").findOneAndUpdate( {cifm: args.cifm}, {$set: args.marca} )
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "marca actualizada con éxito",
                    }
                })
                .catch ( (error) => {
                    return { 
                        status: false,
                        message: `Error: ${error}`
                    }
                })
            return dataResult;
        }

    }


}

export default mutationUpdatemarcaResolvers;