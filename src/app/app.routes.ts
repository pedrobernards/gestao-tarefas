import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
   {path: 'taskList', title: 'Lista de Tarefas', component: TaskListComponent},
   {path: 'taskDetails/:id', title: 'Detalhes da Tarefa', component: TaskDetailsComponent},
   {path: '', redirectTo: 'taskList', pathMatch: 'full'}           
];
