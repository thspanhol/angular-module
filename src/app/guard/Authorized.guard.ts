import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../core/shared.service';


@Injectable({
  providedIn: 'root'
})

export class AuthorizedGuard implements CanActivate {

  constructor(private sharedService: SharedService, private router: Router){}

  canActivate(): boolean {
    let auth = this.sharedService.getLogin();

    //if (auth) auth;

    //this.router.navigate(['/todo'])
    //return auth;

    return auth;
  }
  
};
