export interface IConfigModel {
    id: number;
    login: string;
    email: string;
    passwordHash: string;
    dateOfBirth: Date;
}

export class ConfigModel implements IConfigModel {
    id: number;
    login: string;
    email: string;
    passwordHash: string;
    dateOfBirth: Date;
}