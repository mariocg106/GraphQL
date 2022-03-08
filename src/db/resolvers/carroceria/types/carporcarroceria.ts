import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { Icarroceria } from './../../../interfaces/Icarroceria'; 
import { Icar } from './../../../interfaces/Icar'; 


const typecarporcarroceria: IResolvers = {
    carroceria: {
        carporcarroceria: async ( carroceria: Icarroceria, __, context: {db: Db} ): Promise<Icar[]> => {
            
            const datacar = await context.db.collection("car").find().toArray() as Icar[];
            const carList = datacar.filter( (car) => car.cifCA.indexOf(carroceria.cifCA) > -1 );
            return carList;
        }
    }
}

export default typecarporcarroceria;