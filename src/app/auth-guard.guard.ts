import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';
import { global } from './GlobalVariables';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('isAuthenticated') == 'true') {
        return true;
      }
      return false;
    }
}
