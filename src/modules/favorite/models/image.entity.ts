import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FavoriteImage extends Document {
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true })
  image: string;
}

export const FavoriteImageSchema = SchemaFactory.createForClass(FavoriteImage);
