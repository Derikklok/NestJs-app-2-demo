import { Injectable , Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}
  getHello(): string {
    return 'Hello World from sachins code!';
  }
  async getTable(name: string): Promise<any[]> {
    return await this.sql`SELECT * FROM ${name}`;
  }
}
