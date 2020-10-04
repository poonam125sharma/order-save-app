import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { BracketListComponent } from './views/bracket-list/bracket-list.component';
import { BracketDetailsComponent } from './views/bracket-details/bracket-details.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'bracket' },
    { path: 'bracket', component: BracketListComponent },
    { path: 'bracket/new', component: BracketDetailsComponent },
    { path: 'bracket/:id', component: BracketDetailsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
