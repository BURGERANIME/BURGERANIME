import { Injectable, BadRequestException, ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
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
    const { email, password, username } = body;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = new this.userModel({
      email,
      username,
      password: hashedPassword,
    });

    try {
      await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user');
    }

    // Create a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET , { expiresIn: '1h' });

    return { user: newUser, token };
  }

  // SignIn
  async signinAccount(body: any) {
    const { email, password } = body;

    // Check if user exists
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });

    return { user, token };
  }



}
