import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icar } from '../../../interfaces/Icar';

import { Db } from 'mongodb';

const mutationAddcarResolvers: IResolvers = {
    Mutation: {
        addcar: async(_: void, args: {car: Icar}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("car").insertOne(args.car)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "car insertado con éxito",
                        data: args.car
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

export default mutationAddcarResolvers;
