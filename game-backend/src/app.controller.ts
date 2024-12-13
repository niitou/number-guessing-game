import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/game')
  game(@Body() playerGuess: any) {
    const guess = Number(playerGuess['data']);
    if (isNaN(guess))
      return { status: 'ONGOING', message: 'Input is not a number' };
    if (guess > this.appService.secret_number) {
      return { status: 'ONGOING', message: `It's lower than ${guess}` };
    } else if (guess < this.appService.secret_number) {
      return { status: 'ONGOING', message: `It's higher than ${guess}` };
    } else {
      return {
        status: 'FINISHED',
        message: `Correct, the secret number is ${this.appService.secret_number}`,
      };
    }
  }

  @Get('/new')
  newNumber() {
    return this.appService.getNewNumber();
  }
}
