import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { ForgotComponent } from "./pages/auth/forgot/forgot.component";
import { EmailVerifyComponent } from "./pages/auth/email-verify/email-verify.component";
import { ContentComponent } from "./layout/content/content.component";

import { contentRoutes } from "./_routes/routes";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {path: "auth/login", component: LoginComponent},
  {path: "auth/register", component: RegisterComponent},
  {path: "auth/forgot-password", component: ForgotComponent},
  {
    path: "auth/email-verification/:verificationCode",
    component: EmailVerifyComponent,
  },
  {
    path: "",
    component: ContentComponent,
    children: contentRoutes
  },
  {path: "**", redirectTo: "dashboard"},
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: "enabled",
    scrollPositionRestoration: "enabled",
})],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
