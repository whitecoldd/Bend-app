import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasListComponent } from './areas-list/areas-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'areas' },
  { path: 'areas', component: AreasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
