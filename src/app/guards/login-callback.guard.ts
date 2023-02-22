import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCallbackGuard implements CanActivate {

  constructor(private _router: Router, private _sharedService: SharedService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isLoginCallBack(route);
  }


  isLoginCallBack(route: ActivatedRouteSnapshot) {
    if (location.href.includes("login-callback")) {

      this._sharedService.objOAuth = {

        code: new URL(location.href).searchParams.get('code'),
        session_state: new URL(location.href).searchParams.get('session_state'),
      }

    }

    this._router.navigateByUrl("/dashboard");
    return false;
  }

}
