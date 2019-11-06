import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private expiresAt: number = null;

  constructor(private http: HttpClient) { }

  public auth(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .append('username', username)
      .append('password', password);
    return this.http.post('/api/authenticate', body).pipe(tap(response => {
      this.expiresAt = response.expiresAt;
    }));
  }

  public isAuthenticated(): boolean {
    return this.expiresAt != null;
  }

}
