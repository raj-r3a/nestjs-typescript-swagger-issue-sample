import { Injectable } from '@nestjs/common';
import { HelloResponse } from './app.dto';

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      myValues: [0, 1, 2, 3],
      myOtherValues: [0, 1, 2, 3],
    };
  }
}
