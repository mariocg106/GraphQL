import { IResolvers } from "@graphql-tools/utils";


const typesUnionResolvers: IResolvers = {
    car: { 
    __resolveType(obj: { nombre: string; cifm: string; cifCA: string }) {
     
      if (obj.nombre) {
        return "marca";
      }
      
      if (obj.cifm) {
        return "car";
      }

      if (obj.cifCA) {
        return "car";
      }
      return null; 
    },
  },
  
  
};

export default typesUnionResolvers;

