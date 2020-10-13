import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BracketListComponent } from './views/bracket-list/bracket-list.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BracketCardComponent } from './views/bracket-card/bracket-card.component';
import { BracketDetailsComponent } from './views/bracket-details/bracket-details.component';
import { BracketViewComponent } from './views/bracket-view/bracket-view.component';
import { HomeComponent } from './views/home/home.component';
import { PrettyjsonPipe } from './core/pipes/prettyjson.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BracketListComponent,
    LayoutComponent,
    BracketCardComponent,
    BracketDetailsComponent,
    BracketViewComponent,
    HomeComponent,
    PrettyjsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
