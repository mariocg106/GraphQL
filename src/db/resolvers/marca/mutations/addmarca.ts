import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca';

import { Db } from 'mongodb';

const mutationAddmarcaResolvers: IResolvers = {
    Mutation: {
        addmarca: async(_: void, args: {marca: Imarca}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("marca").insertOne(args.marca)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "marca insertado con éxito",
                        data: args.marca
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

export default mutationAddmarcaResolvers;
