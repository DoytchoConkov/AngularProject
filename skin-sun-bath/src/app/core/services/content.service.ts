import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skin } from 'src/app/shared/interfaces/skin';

import { environment } from 'src/environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadSkin(id: string) {
    return this.http.get<Skin>(`${API_URL}/skins/${id}`, { withCredentials: true });
  }

  loadSkins( email: string ) {
    return this.http.get<Skin[]>(`${API_URL}/skins?email=${email}`, { withCredentials: true });
  }

  loadSkinCoefficient( email: string) {
    return this.http.get<number>(`${API_URL}/skins/skins-coefficient?email=${email}`, { withCredentials: true });
  }

  saveSkin(data: any) {
    return this.http.post<Skin>(`${API_URL}/skins`, data, { withCredentials: true });
  }
}
