export interface User {
    createdAt: string,
    name: string,
    avatar: string,
    email: string,
    address: string,
    id : number 
}



export interface NewUser {
    name: string,
    avatar: File,
    email: string,
    address: string,
}