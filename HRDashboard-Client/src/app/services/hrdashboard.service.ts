import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7143';

@Injectable({
  providedIn: 'root'
})
export class HRDashboardService {
  constructor(
    private http: HttpClient
  ) { }

  public getEventAll(): Observable<any> {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    return this.http.get(`${API_ENDPOINT}/Event/All`, options);
  }

  public putEvent(data: any, contentType: string = 'application/json-patch+json, application/json, text/json, application/*+json'): Observable<any> {
    const options = {
      headers: {
        'content-type': contentType,
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    const body = data;
    return this.http.put(`${API_ENDPOINT}/Event`, body, options);
  }

  public postEvent(data: any, contentType: string = 'application/json-patch+json, application/json, text/json, application/*+json'): Observable<any> {
    const options = {
      headers: {
        'content-type': contentType,
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/Event`, body, options);
  }

  public deleteEvent(id: string): Observable<any> {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    return this.http.delete(`${API_ENDPOINT}/Event/${id}`, options);
  }

  public registerUser(data: any, contentType: string = 'application/json-patch+json, application/json, text/json, application/*+json') {
    const options = {
      headers: {
        'content-type': contentType
      }
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/Auth/Register`, body, options);
  }

  public loginUser(data: any, contentType: string = 'application/json-patch+json, application/json, text/json, application/*+json') {
    const options = {
      headers: {
        'content-type': contentType
      }
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/Auth/Login`, body, options);
  }

  public getMyEvents(): Observable<any> {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    return this.http.get(`${API_ENDPOINT}/Event`, options);
  }

  public getUsers(): Observable<any> {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    return this.http.get(`${API_ENDPOINT}/User`, options);
  }

  public changeUserRole(data: any): Observable<any> {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('hr_app_token')}`,
      },
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/User/Role`, body, options);
  }
}
