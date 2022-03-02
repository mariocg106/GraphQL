import { IResolvers } from "@graphql-tools/utils";


const typesUnionResolvers: IResolvers = {
    car: { 
    __resolveType(obj: { modelo: string; codcoche: string }) {
     
      if (obj.modelo) {
        return "marca";
      }
      
      if (obj.codcoche) {
        return "car";
      }
      return null; 
    },
  },
  
  
};

export default typesUnionResolvers;