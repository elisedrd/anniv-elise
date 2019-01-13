import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NumPadlockComponent } from './num-padlock/num-padlock.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { PianoComponent } from './piano/piano.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumPadlockComponent,
    NotFoundComponent,
    NavbarComponent,
    PianoComponent,
    PuzzleComponent,
    InstructionsComponent,
    EndComponent
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
        path: 'numpad/:nb',
        component: NumPadlockComponent
      },
      {
        path: 'puzzle/1',
        component: InstructionsComponent
      },
      {
        path: 'puzzle/10',
        component: PianoComponent
      },
      {
        path: 'puzzle/11',
        component: EndComponent
      },
      {
        path: 'puzzle/:nb',
        component: PuzzleComponent
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
