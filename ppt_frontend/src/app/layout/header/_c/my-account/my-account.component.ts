import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../pages/auth/auth.service";
import { StorageService } from "../../../../_services/storage.service";
import { Subscription, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit, OnDestroy {
  public dtName: string;
  public dtRole: string;
  public profileImg: "assets/images/dashboard/profile.jpg";
  public remainingTime: number;
  private intervalSubscription: Subscription;


  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    public router: Router
  ) {
    const data = this.storageService.getUser(true);
    if (data) {
      this.dtName = data.data.username;
    }
  }

  ngOnInit() { 
    const sessionExpiration = this.storageService.getExpirationTimestamp();
    if (sessionExpiration) {
      this.startCountdown(sessionExpiration);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  private startCountdown(sessionExpiration: number): void {
    const currentTime = Date.now();
    const remainingMilliseconds = Math.max(sessionExpiration - currentTime, 0);
    this.remainingTime = remainingMilliseconds;

    const countdown$ = interval(1000).pipe(
      takeWhile(() => this.remainingTime > 0)
    );

    this.intervalSubscription = countdown$.subscribe(() => {
      this.remainingTime -= 1000;
      if (this.remainingTime <= 0) {
        window.location.reload();
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        if (res.status == 200) {
          window.sessionStorage.clear();
          window.sessionStorage.removeItem("auth-user");
          window.location.href = "/dashboard";
        } else {
          console.log(res);
        }
      },
      error: err => {
        console.log(err.error.message.error);
      }
    });
  }
}
