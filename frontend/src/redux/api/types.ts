/* eslint-disable prettier/prettier */
export interface IUser {
    name: string;
    email: string;
    role: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IGenericResponse {
    status: string;
    message: string;
}
