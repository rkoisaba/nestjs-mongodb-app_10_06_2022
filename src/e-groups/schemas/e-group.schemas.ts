import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EGroupDocument = EGroup & Document;

@Schema()
export class EGroup {
    @Prop()
    id: string;
    @Prop()
    campus : string;
    @Prop()
    demographic: string;
    @Prop()
    group_type: string;
    @Prop()
    meeting_date: string;
    @Prop()
    zip_code: number;
  
}
export const EGroupSchema = SchemaFactory.createForClass(EGroup);