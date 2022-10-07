import { Document } from "mongoose";

export interface Users extends Document{

    id : string;
    email: string;
    password: string;
    phone: string;
    zip_code: number;
}