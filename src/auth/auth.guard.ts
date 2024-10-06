import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from "../services/token-storage.service";



@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Promise<boolean | any> {
    return new Promise((resolve,reject)=> {
      const token = this.tokenStorageService.getToken();
      console.log(route.routeConfig?.path )
      if(token) {
        (route.routeConfig?.path ===  'signin' && this.router.navigateByUrl('/'));
        resolve(true)
      } else  {
        (!['signin', 'signup'].includes(route.routeConfig?.path || '') && this.router.navigateByUrl('/auth/signin'));
        resolve(['signin', 'signup'].includes(route.routeConfig?.path || ''))
      }
    })
  }

}
