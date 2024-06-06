import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

interface Role {
  admin: boolean;
  modrator: boolean;
  helper: boolean;
  vip: boolean;
  demo: boolean;
}

@Schema({ timestamps: true }) // Enabling automatic creation of createdAt and updatedAt fields
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true }) // Ensure email is unique
  email: string;

  @Prop({ required: true })
  password: string;

  avatar: string;
  role: Role;

}

export const UserSchema = SchemaFactory.createForClass(User);
