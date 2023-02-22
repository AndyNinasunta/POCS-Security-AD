import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {



  public get accessTokenDecode(): any {
    return this.getDecodedAccessToken(localStorage.getItem('token'));
  }

  public set accessTokenDecode(token: any) {
    localStorage.setItem('token', token);
  }


  objOAuth = null;

  isLogged = false;


  constructor(private _httpClient: HttpClient) { }


  getLoginUrl(): Observable<any> {

    return this._httpClient.get<any>(`${environment.urlApi}login-url?appId=${environment.codeAd}`)
  }


  getAccessToken(code: string, state: string): Observable<any> {

    return this._httpClient.get<any>(`${environment.urlApi}get-access-token?appId=${environment.codeAd}&code=${code}&state=${state}`)
  }



  decodeB64(base64: string) {
    return atob(base64);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

}
