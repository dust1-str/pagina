import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './Core/Services/login-service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    try {
      const isAuthenticated = await this.loginService.isAuth().toPromise();
      return isAuthenticated;
    } catch (error) {
      return this.router.createUrlTree(['/login']);
    }
  }
}
