import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createConnection } from 'mysql2/promise';

@Injectable()
export class DatabaseInitService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    await this.createDatabaseIfNotExists();
  }

  async createDatabaseIfNotExists() {
    const host = this.configService.get('DB_HOST');
    const port = Number(this.configService.get('DB_PORT')) || 3306;
    const user = this.configService.get('DB_USERNAME');
    const password = this.configService.get('DB_PASSWORD');
    const database = this.configService.get('DB_NAME');

    const connection = await createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await connection.end();
    console.log(`✅ Checked or created database: ${database}`);
  }
}
