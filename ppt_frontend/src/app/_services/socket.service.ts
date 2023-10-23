import { Injectable } from "@angular/core";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { env } from "../_env/env";

@Injectable({
  providedIn: "root",
})
export class WebSocketService {
  private socket: WebSocketSubject<any>;

  constructor() { }

  subscribeToMessages() {
    return this.socket.asObservable();
  }
}
