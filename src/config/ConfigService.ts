import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyService {
  constructor(private configService: ConfigService) {
    const port = this.configService.get<number>('PORT');
    console.log('App port:', port);
  }
}