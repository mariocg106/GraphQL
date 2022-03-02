
import { Icar } from "./Icar";
import { Imarca } from './Imarca';
import { Icarroceria } from './Icarroceria';

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



