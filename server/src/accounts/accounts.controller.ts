import { Controller } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Post, Body } from '@nestjs/common';
import { CreateAccountDto, SigninAccountDto } from '../dto/AccountsDto';
@Controller('accounts')
export class AccountsController {
   constructor( private readonly AccountsService : AccountsService ) {}

   // Create a new account
   @Post('signup')
   async createAccount(@Body() body : CreateAccountDto) {
     return this.AccountsService.createAccount(body);
   }

   // SignIn 
   @Post('signin')
    async signinAccount(@Body() body : SigninAccountDto) {
      return this.AccountsService.signinAccount(body);
    }

    // Authenticate JWT after signIn 
    @Post('authenticate')
    async authenticate(@Body() body : {token : string}) {
      return this.AccountsService.authenticate(body.token);
    }

}
