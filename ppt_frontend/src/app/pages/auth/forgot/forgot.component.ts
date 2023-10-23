import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"]
})
export class ForgotComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  isProcessing = false;
  errorMessage = "";

  constructor( ) { }

  ngOnInit(): void { }

}
