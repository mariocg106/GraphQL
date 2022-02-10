import { IResolvers } from "@graphql-tools/utils";
import { Icar } from '../../../interfaces/Icar';
import { Db } from 'mongodb';

const queryBookResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Hola Mundo desde GraphQL"
        }
    }
}

export default queryBookResolvers;