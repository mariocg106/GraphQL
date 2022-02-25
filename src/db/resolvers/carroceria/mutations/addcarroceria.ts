import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icarroceria } from '../../../interfaces/Icarroceria';

import { Db } from 'mongodb';

const mutationAddcarroceriaResolvers: IResolvers = {
    Mutation: {
        addcarroceria: async(_: void, args: {carroceria: Icarroceria}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("carrocerias").insertOne(args.carroceria)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "carroceria insertado con éxito",
                        data: args.carroceria
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

export default mutationAddcarroceriaResolvers;
