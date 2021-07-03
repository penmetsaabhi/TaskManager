

export interface Sprint {
    Id: number;
    title: string;
    createdOn: Date;
    userName: string;
}

export interface User {
    Id: number;
    userName : string;
    Name : string;
    email : string;
    addedOn : Date;
    password : string;
}