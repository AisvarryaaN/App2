import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';
const routes: Routes = [
  {path: '',component: FetchDataComponent},
  {path: 'display/:id', component: DisplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
