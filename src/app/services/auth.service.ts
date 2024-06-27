import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _B1SESSION: string | null = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  public login(username: string, dbname: string, psw: string) {
    const url = `https://192.168.0.130:50000/b1s/v1/Login`;
    const body = {
      CompanyDB: dbname,
      Password: psw,
      UserName: username,
    };
    return this.http.post(url, body, this.httpOptions).pipe(
      tap((e: any) => {
        this._B1SESSION = e.body.SessionId;
        sessionStorage.setItem('token', this._B1SESSION!);
      })
    );
  }

  get B1SESSION(): string | null {
    return this._B1SESSION;
  }
}
