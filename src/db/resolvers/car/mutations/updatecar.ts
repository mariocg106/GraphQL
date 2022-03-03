import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icar } from '../../../interfaces/Icar';
import { Db } from 'mongodb';

const mutationUpdatecarResolvers: IResolvers = {
    Mutation: {
        updatecar: async(_: void, args: {codcoche: string ,car: Icar}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("car").findOneAndUpdate( {codcoche: args.codcoche}, {$set: args.car} ) 
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "coche actualizado con éxito",
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

export default mutationUpdatecarResolvers;