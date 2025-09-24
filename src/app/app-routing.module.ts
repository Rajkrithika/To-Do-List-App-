import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { DisplayTaskComponent } from './display-task/display-task.component';

const routes: Routes = [
  {path: '', component: HomeComponent} , {path:'list', component: ListTaskComponent} , {path: 'display', component: DisplayTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
