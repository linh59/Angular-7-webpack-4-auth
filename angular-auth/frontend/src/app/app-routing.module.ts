import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { RegisterComponent } from './shared/components/register/register.component';

import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}