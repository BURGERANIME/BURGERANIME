

export class CreateAccountDto {
   username: string;
   email: string;
   password: string;
   created_at: Date;
}

export class SigninAccountDto {
   email: string;
   password: string;
}