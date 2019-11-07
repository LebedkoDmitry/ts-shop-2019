import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private expiresAt: number = null;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('expiresAt')) {
      this.expiresAt = Number(localStorage.getItem('expiresAt'));
    }
  }

  public login(username: string, password: string): Observable<any> {
    const body: HttpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('/api/authenticate', body)
      .pipe(tap(response => {
        this.expiresAt = response.expiresAt;
        localStorage.setItem('expiresAt', response.expiresAt);
      }, error => {
        console.error(error);
      }));
  }

  public isAuthenticated(): boolean {
    return this.expiresAt !== null && (new Date().getTime() <= this.expiresAt);
  }

}
