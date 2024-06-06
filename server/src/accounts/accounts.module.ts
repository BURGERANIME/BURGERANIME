import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot() , MongooseModule.forRoot(`${process.env.MONGO_URI}/myburger`)],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
