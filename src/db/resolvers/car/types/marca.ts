import { Icar } from '../../../interfaces/Icar'; //people
import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca'; //book

import { Db } from 'mongodb';

const typecaarmarcaResolvers : IResolvers = {
    car: {
        marcas: async(root:Imarca, __ , context: {db:Db} ): Promise<Icar[]> => {
            let marcas: Icar[]=[];

            for (let idmarca of root.car){
                let dbmarca = await context.db.collection("marca").findOne({id: idmarca })
                    .then (data => {
                        return data as Imarca;
                    })
                marcas.push(dbmarca as unknown as Icar);
            }

            return marcas;
        }
    }
}

export default typecaarmarcaResolvers ;