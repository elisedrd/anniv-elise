import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionTestComponent } from './accordion-test/accordion-test.component';
import { HomeComponent } from './home/home.component';
import { NumPadlockComponent } from './num-padlock/num-padlock.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionTestComponent,
    HomeComponent,
    NumPadlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
