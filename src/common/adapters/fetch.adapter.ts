/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      throw new Error('Error - Check logs');
    }
  }
}
