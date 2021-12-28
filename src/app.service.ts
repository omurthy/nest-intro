import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloven(): string {
    return 'Gerizler Başından Hoplayamadım !';
  }
}
