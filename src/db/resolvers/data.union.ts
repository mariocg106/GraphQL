import { IResolvers } from "@graphql-tools/utils";


const typesUnionResolvers: IResolvers = {
    car: { 
    __resolveType(obj: { nombre: string; codcoche: string }) {
     
      if (obj.nombre) {
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