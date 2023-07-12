import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { DataModule } from '../data/data.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    DataModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideAnimations(), provideToastr()],
  bootstrap: [AppComponent],
})
export class AppModule {}
