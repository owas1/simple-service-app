import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicNewAccountComponent } from './dynamic-new-account/dynamic-new-account.component';
import { DynamicAccountComponent } from './dynamic-account/dynamic-account.component';
import { AccountSerivce } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicNewAccountComponent,
    DynamicAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountSerivce, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
