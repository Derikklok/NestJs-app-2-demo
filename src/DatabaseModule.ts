import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { neon } from '@neondatabase/serverless';

// Load Environment Variables
config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

const sql = neon(process.env.DATABASE_URL);

const dbProvider = {
  provide: 'POSTGRES_POOL',
  useValue: sql,
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}