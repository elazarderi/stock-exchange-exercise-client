import { ITrader } from "..";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    traderId: number;

    trader?: ITrader;
}