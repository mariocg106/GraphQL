import { Icar } from '../../../interfaces/Icar';
import { IResolvers } from "@graphql-tools/utils";
import { Icarroceria } from '../../../interfaces/Icarroceria';

import { Db } from 'mongodb';

const typecarcarroceriaResolvers : IResolvers = {
    car: {
        cifCA: async(root:Icar, __ , context: {db:Db} ): Promise<Icarroceria[]> => {
            let carroceria: Icarroceria[]=[];

            for (let idcarroceria of root.cifCA){
                let dbcarroceria = await context.db.collection("carrocerias").findOne({id: idcarroceria })
                    .then (data => {
                        return data as Icarroceria;
                    })
                    carroceria.push(dbcarroceria as Icarroceria);
            }

            return carroceria;
        }
    }
}

export default typecarcarroceriaResolvers ;