import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { AuthService } from "../pages/auth/auth.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MenteriGuard {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private authService: AuthService) {}

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  canActivate(): Observable<boolean> {
    const role = this.authService.validateRole();
    if (role !== null) {
      return role.pipe(
        map((res) => {
          if (res.data.toLowerCase() === 'menteri') {
            this.isAuthenticatedSubject.next(true);
            return true;
          } else {
            this.router.navigate(['/dashboard']);
            this.isAuthenticatedSubject.next(false);
            return false;
          }
        })
      );
    }
    return of(false); 
  }
}
