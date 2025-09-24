import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from '../list-task/list-task.component';
import { DisplayTaskComponent } from '../display-task/display-task.component';



@NgModule({
  declarations: [
    ListTaskComponent,
    DisplayTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
