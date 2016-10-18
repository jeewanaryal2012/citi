import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { routing } from './app.routes';

import { AppComponent }  from './app.component';
//import { PeopleListComponent } from './people-list.component';
//import { PersonDetailsComponent } from './person-details.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, NgbModule.forRoot()],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
