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

  @Prop({ default: 'https://firebasestorage.googleapis.com/v0/b/burgeranimesally.appspot.com/o/avatars%2Favatar.png?alt=media&token=37a673b4-b442-4c7a-ad81-64d232d334f2' })
  avatar: string;

  @Prop({ type: Object, default: { admin: false, modrator: false, helper: false, vip: false, demo: true } })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
