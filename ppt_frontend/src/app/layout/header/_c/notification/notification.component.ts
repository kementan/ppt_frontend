import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {
  public openNotification: boolean = false;
  public notifQty: number = 0;
  public messages: string[] = [];

  constructor() { }

  ngOnInit() { }

  toggleNotificationMobile() {
    this.openNotification = !this.openNotification;
  }
}
