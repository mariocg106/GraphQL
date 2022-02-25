enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface Icarroceria {
    _id?: any;
    cifCA: string;
    tipoCARR: string;
    Status: enumStatus;  
}