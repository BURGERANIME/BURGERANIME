import { Controller } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Post, Body } from '@nestjs/common';
import { AccountDto } from '../dto/AccountsDto';
@Controller('accounts')
export class AccountsController {
   constructor( private readonly AccountsService : AccountsService ) {}

   // Create a new account
   @Post()
   async createAccount(@Body() body : AccountDto) {
     return this.AccountsService.createAccount(body);
   }

}
