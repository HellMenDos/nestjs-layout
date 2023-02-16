import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController { 
    
    @Get('signin')
    async signin() {
      return 'Hello'
    }
  
}
