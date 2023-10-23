import { Injectable } from "@angular/core";
import { AES, enc } from "crypto-js";
import { env } from "../_env/env";

const USER_KEY = "auth-user";
const SESSION_EXPIRATION_KEY = "session-expiration";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    const encData = AES.encrypt(JSON.stringify(user), env.qu2h67l8).toString();
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, encData.toString());

    const expirationTimestamp = new Date();
    expirationTimestamp.setHours(expirationTimestamp.getHours() + 1); // 1 hour from now
    window.sessionStorage.setItem(SESSION_EXPIRATION_KEY, expirationTimestamp.getTime().toString());
  }

  public getExpirationTimestamp(): number | null {
    const sessionExpiration = window.sessionStorage.getItem(SESSION_EXPIRATION_KEY);
    return sessionExpiration ? parseInt(sessionExpiration, 10) : null;
  }

  public getUser(plain: boolean): any | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    const expirationTimestamp = this.getExpirationTimestamp();

    if (user && expirationTimestamp && expirationTimestamp > new Date().getTime()) {
      if (plain) {
        try {
          const decData = AES.decrypt(user, env.qu2h67l8);
          const userData = JSON.parse(decData.toString(enc.Utf8));
          return userData;
        } catch (error) {
          console.error("Error decrypting user data: ", error);
        }
      } else {
        return user;
      }
    }
    
    this.clean();
    return null;
  }

  public isLoggedIn(): boolean {
    return !!this.getUser(false);
  }
}