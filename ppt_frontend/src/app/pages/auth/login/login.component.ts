import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { StorageService } from "../../../_services/storage.service";
import { ReCaptchaV3Service } from "ng-recaptcha";
import { RecaptchaService } from "../../../_services/recaptcha.service";
import { Router } from "@angular/router";
import {
  SocialAuthService,
  SocialUser,
} from "@abacritt/angularx-social-login";

const Swal = require("sweetalert2")
const msg = Swal.mixin({
  timer: 2000,
  timerProgressBar: true,
})

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  form: any = {
    name: null,
    username: null,
    email: null,
    password: null
  }

  isLoggedIn = false;
  isLoginFailed = false;
  isProcessing = false;
  errorMessage = "";

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private recaptchaService : RecaptchaService,
    private socialAuthService: SocialAuthService,
    public router: Router
  ) { 
    
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(["/dashboard"]);
    }

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = (user != null);
      
      this.authService.IsRegistered(this.socialUser.email).subscribe({
        next: res => {
          const rand = this.generateRandom4DigitNumber();
          this.form.name = this.socialUser.firstName + ' ' + this.socialUser.lastName;
          this.form.username = this.socialUser.firstName.toLocaleLowerCase() + rand;
          this.form.email = this.socialUser.email;
          this.form.password = this.socialUser.id;
          if (res.data == false) {
            this.authService.register(this.form.name, this.form.username, this.form.email, this.form.password, true).subscribe({
              next: res => {
                if (res.data.email == this.form.email) {
                  this.authService.login(this.form.email, this.form.password, true).subscribe({
                    next: res => {
                      this.storageService.saveUser(res);
                      this.isLoginFailed = false;
                      this.isLoggedIn = true;
                      msg.fire(
                        "Berhasil", 
                        "Login berhasil", 
                        "success",
                      );
                      setTimeout(() => {
                        this.router.navigate(["/dashboard"]);
                      }, 1000);
                    },
                    error: err => {
                      this.errorMessage = err.error.message.error;
                      this.isLoginFailed = true;
                      this.setLoginBtnState(false);
                    }
                  });
                }
              }, 
              error: err => {
                console.log(err);
              }
            });
          } else {
            this.authService.login(this.form.email, this.form.password, true).subscribe({
              next: res => {
                this.storageService.saveUser(res);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                msg.fire(
                  "Berhasil", 
                  "Login berhasil", 
                  "success",
                );
                setTimeout(() => {
                  this.router.navigate(["/dashboard"]);
                }, 1000);
              },
              error: err => {
                this.errorMessage = err.error.message.error;
                this.isLoginFailed = true;
                this.setLoginBtnState(false);
              }
            });
          }
        },
        error: err => {
          console.log(err);
        }
      });
    });
  }

  generateRandom4DigitNumber(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  setLoginBtnState(isProcessing: boolean): void {
    this.isProcessing = isProcessing
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.innerHTML = isProcessing ? "Processing ..." : "Login";
    }
  }

  onSubmit(): void {
    if (this.isProcessing) {
      return;
    }

    const { username, password } = this.form;
    this.setLoginBtnState(true);
    this.isProcessing = true;

    this.recaptchaV3Service.execute("importantAction")
    .subscribe((token: string) => {
      this.recaptchaService.verifyRecaptcha(token).subscribe({
        next: result => {
          if (result.status == 200) {
            this.authService.login(username, password, false).subscribe({
              next: res => {
                this.setLoginBtnState(false);
                this.storageService.saveUser(res);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                msg.fire(
                  "Berhasil", 
                  "Login berhasil", 
                  "success",
                );
                setTimeout(() => {
                  this.router.navigate(["/dashboard"]);
                }, 1000);
              },
              error: err => {
                this.errorMessage = err.error.message.error;
                this.isLoginFailed = true;
                this.setLoginBtnState(false);
              }
            });
          } else {
            this.errorMessage = "validasi 3D reCAPTCHA gagal, silahkan refresh halaman";
            this.isLoginFailed = true;
            this.setLoginBtnState(false);
          }
        },
        error: err => {
          this.isLoginFailed = true;
          this.errorMessage = "validasi 3D reCAPTCHA gagal, silahkan refresh halaman " + err;
          this.setLoginBtnState(false);
        }
      })
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
