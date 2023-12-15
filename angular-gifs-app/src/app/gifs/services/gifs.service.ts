import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';
const GIPHY_API_KEY: string = '1I8qf35CtQNg85Q8jnI5c9ohPmdyiIKd';
const SERVICE_URL: string = 'https://api.giphy.com/v1/gifs/search';
const LIMIT: string = '10';

@Injectable({ providedIn: 'root' })
export class GifsService {
  gifList: Gif[] = [];
  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', LIMIT)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${SERVICE_URL}`, { params })
      .subscribe((resp) => (this.gifList = resp.data));
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');

    if (!history) return;
    this._tagsHistory = JSON.parse(history);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }
}
