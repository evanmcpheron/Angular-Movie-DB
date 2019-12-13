import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/search/results/results.component';
import { DetailsComponent } from './components/search/results/details/details.component';


const routes: Routes = [
  {path: 'details', component: DetailsComponent},
  // {path: 'results', component: ResultsComponent},
  {path: '**', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
