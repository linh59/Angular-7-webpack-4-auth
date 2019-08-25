import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './shared/components/login/login.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import '../assets/sb-admin-2.min';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [AuthenticationService,AuthGuardService],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}