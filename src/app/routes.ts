import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";

import { AuthGuard } from "../auth/auth.guard";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

export const routes:Routes = [
  { path: 'auth', children: [
    { path: 'signin', component: SignInComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] }
  ]},
  { path: '', component: MainComponent, canActivate: [AuthGuard]}
]
