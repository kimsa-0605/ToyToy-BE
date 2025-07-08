// 1. Import
import { Injectable } from '@nestjs/common'; 
import { ConfigService } from '@nestjs/config'; 

// 2. Create service
@Injectable()
export class MyService {
  constructor(private configService: ConfigService) {
    const port = this.configService.get<number>('PORT');
  }
}