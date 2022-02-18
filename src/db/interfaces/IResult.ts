
import { Icar } from "./Icar";
import { Imarca } from './Imarca';


export interface IResult {
    status: boolean;
    message: string;
    data?: DataDB
}

type DataDB =
    | Icar
    | Imarca
    | null
    | undefined ;



