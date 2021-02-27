export interface IUser {
    id: number;
    login: string;
    email: string;
    passwordHash: string;
    dateOfBirth: Date;
}

export class UserModel implements IUser {
    id: number;
    login: string;
    email: string;
    passwordHash: string;
    dateOfBirth: Date;
}
