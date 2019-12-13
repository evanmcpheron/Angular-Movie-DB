import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/search/results/results.component';

// services
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
