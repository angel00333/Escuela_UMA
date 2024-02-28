import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola desde mi escuela';
  }

  getGreeting(): string {
    return 'Estos son gretting';
  }
}
