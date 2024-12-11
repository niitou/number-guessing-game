import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // declare here so the number won't change everytime a request is made
  secret_number = Math.floor(Math.random() * 1000) + 1;
  getHello(): string {
    return 'Hello World!';
  }

  // get new number in case user wants to play another game
  getNewNumber(): Number {
    return (this.secret_number = Math.floor(Math.random() * 1000) + 1);
  }
}
