import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Icarroceria } from '../../../interfaces/Icarroceria';
import { Db } from 'mongodb';

const mutationUpdatecarroceriaResolvers: IResolvers = {
    Mutation: {
        updatecarroceria: async(_: void, args: {cifCA: string ,carroceria: Icarroceria}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("carroceria").findOneAndUpdate( {cifCA: args.cifCA}, {$set: args.carroceria} ) 
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "carroceria actualizada con éxito",
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

export default mutationUpdatecarroceriaResolvers;