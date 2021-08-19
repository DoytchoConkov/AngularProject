import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skin } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadSkin(id: string) {
    console.log(id)
    return this.http.get<Skin>(`${API_URL}/skins/${id}`, { withCredentials: true });
  }

  loadSkins() {
    return this.http.get<Skin[]>(`${API_URL}/skins`, { withCredentials: true });
  }

  loadBestSkins(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<Skin[]>(`${API_URL}/skins${query}`, { withCredentials: true });
  }

  saveSkin(data: any) {
    return this.http.post<Skin>(`${API_URL}/skins`, data, { withCredentials: true });
  }
}
