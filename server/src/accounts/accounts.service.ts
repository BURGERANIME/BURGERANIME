import { Injectable, ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from 'src/models/user.schema';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Create a new account
  async createAccount(body: any) {
    const { username, email, password } = body;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      return new ConflictException('User already exists').message;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const avatardemo = "https://firebasestorage.googleapis.com/v0/b/burgeranimesally.appspot.com/o/avatars%2Favatar.png?alt=media&token=37a673b4-b442-4c7a-ad81-64d232d334f2";

    // Create the new user
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
      avatar: avatardemo,
      role: {
        admin: false,
        modrator: false,
        helper: false,
        vip: false,
        demo: true,
      },
    });

    try {
      await newUser.save();
    } catch (error) {
      return new InternalServerErrorException('Failed to create user').message;
    }

    const payload = {
      userId: newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      role: newUser.role,
    };
    // Create a JWT token
    const token = jwt.sign( payload , process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
  }

  // SignIn
  async signinAccount(body: any) {
    const { email, password } = body;

    // Check if user exists
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return new UnauthorizedException('Invalid credentials').message;
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new UnauthorizedException('Invalid credentials').message;
    }

    // Create a JWT token
    const payload = {
      userId: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
    };
    
    const token = jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
  }
}
