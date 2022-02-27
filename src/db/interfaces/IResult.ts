
import { Icar } from "./Icar";
import { Icarroceria } from "./Icarroceria";
import { Imarca } from './Imarca';


export interface IResult {
    status: boolean;
    message: string;
    data?: DataDB
}

type DataDB =
    | Icar
    | Imarca
    | Icarroceria
    | null
    | undefined ;



