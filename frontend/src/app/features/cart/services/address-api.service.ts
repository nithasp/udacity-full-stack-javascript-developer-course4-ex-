import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressEntry, AddressForm } from '../models/address.model';
import { API } from '../../../core/config/api-config';

@Injectable({ providedIn: 'root' })
export class AddressApiService {
  private readonly baseUrl = `${API.baseUrl}/addresses`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AddressEntry[]> {
    return this.http.get<AddressEntry[]>(this.baseUrl);
  }

  getOne(id: number): Observable<AddressEntry> {
    return this.http.get<AddressEntry>(`${this.baseUrl}/${id}`);
  }

  create(form: AddressForm): Observable<AddressEntry> {
    return this.http.post<AddressEntry>(this.baseUrl, form);
  }

  update(id: number, form: Partial<AddressForm>): Observable<AddressEntry> {
    return this.http.put<AddressEntry>(`${this.baseUrl}/${id}`, form);
  }

  delete(id: number): Observable<AddressEntry> {
    return this.http.delete<AddressEntry>(`${this.baseUrl}/${id}`);
  }
}
