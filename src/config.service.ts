import * as dotenv from 'dotenv';
dotenv.config(); // Load the .env file

export class ConfigService {
  static get(key: string): string | boolean | undefined {
    return process.env[key];
  }
}