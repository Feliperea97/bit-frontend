import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { SignUp } from './components/pages/sign-up/sign-up';
import { Multas } from './components/pages/multas/multas';
import { Login } from './components/pages/login/login';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path: "home", component: Home, title : "Home | SPA"},
    {path: "sign-up", component: SignUp, title : "Sign Up| SPA"},
    {path: "multas", component: Multas, title : "Multas | SPA"},
    {path: "login", component: Login, title : "Login| SPA"},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", component: PageNotFound, title : "Error 404 | SPA"}
];
