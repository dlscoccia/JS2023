import { HttpAdapter } from '../interfaces/http-adapter.interface';
export declare class FetchAdapter implements HttpAdapter {
    get<T>(url: string): Promise<T>;
}
