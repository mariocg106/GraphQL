import { Icar } from '../../../interfaces/Icar';
import { IResolvers } from "@graphql-tools/utils";
import { Imarca } from '../../../interfaces/Imarca';

import { Db } from 'mongodb';

const typecarmarcaResolvers : IResolvers = {
    car: {
        cifm: async(root:Icar, __ , context: {db:Db} ): Promise<Imarca[]> => {
            let marca: Imarca[]=[];

            for (let idmarca of root.cifm){
                let dbmarca = await context.db.collection("marcas").findOne({id: idmarca })
                    .then (data => {
                        return data as Imarca;
                    })
                marca.push(dbmarca as Imarca);
            }

            return marca;
        }
    }
}

export default typecarmarcaResolvers ;