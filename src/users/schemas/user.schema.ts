import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users {
  
    @Prop()
    id : string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    phone: string;
    @Prop()
    role: string;
  
}

export const UserSchema = SchemaFactory.createForClass(Users);