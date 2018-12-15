import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NumPadlockComponent } from './num-padlock/num-padlock.component';
import { IndicesComponent } from './indices/indices.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { PianoComponent } from './piano/piano.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumPadlockComponent,
    IndicesComponent,
    NotFoundComponent,
    NavbarComponent,
    PianoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'numpad/:name',
        component: NumPadlockComponent
      },
      {
        path: 'indices/:puzzle',
        component: IndicesComponent
      },
      {
        path: 'piano',
        component: PianoComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
