

export class CreateAccountDto {
   username: string;
   email: string;
   password: string;
   avatar: string;
   role: {
      admin: boolean;
      modrator: boolean;
      helper: boolean;
      vip: boolean;
      demo: boolean;
   };
   created_at: Date;
}

export class SigninAccountDto {
   email: string;
   password: string;
}