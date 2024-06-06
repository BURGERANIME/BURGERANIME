import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Enabling automatic creation of createdAt and updatedAt fields
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true }) // Ensure email is unique
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
