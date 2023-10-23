import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../_env/env";
import { StorageService } from "../../_services/storage.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    ) { }

  validateRole(): Observable<any> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;
    if (user !== null) {
      params = params.set("email", user.data.email);
      return this.http.get(
        env.v1_API + "role-validation",
        {
          headers: new HttpHeaders({ 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user.data.token}`
          }),
          params: params
        }
      );
    } 
    return user;
  }

  login(username: string, password: string, is_google: boolean): Observable<any> {
    return this.http.post(
      env.v1_API + "user/login",
      {
        username,
        password,
        is_google
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.post(
      env.v1_API + "user/logout", { }, 
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        })
      }
    );
  }

  register(name: string, username: string, email: string, password: string, is_google: boolean): Observable<any> {
    return this.http.post(
      env.v1_API + "user/register",
      {
        name,
        username,
        email,
        password,
        is_google,
      },
      httpOptions
    );
  };

  verifyEmail(verificationCode: string): Observable<any> {
    return this.http.post(
      env.v1_API + "user/verify-email", { 
        verification_code: verificationCode 
      }, 
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
        })
      }
    );
  }

  IsRegistered(email: string): Observable<any> {
    return this.http.post(
      env.v1_API + "user/is-registered", {
        email: email,
      },
      {
        headers: new HttpHeaders({ 
          "Content-Type": "application/json",
      })
      }
    )
  }
}
