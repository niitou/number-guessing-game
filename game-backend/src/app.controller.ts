import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Need to change to post and check if player guesses is lower, higher, or same as the secret number
  @Get('/game')
  game() {
    return this.appService.secret_number;
  }

  @Get('/new')
  newNumber() {
    return this.appService.getNewNumber();
  }
}
