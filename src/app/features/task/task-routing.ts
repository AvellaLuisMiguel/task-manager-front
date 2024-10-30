import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AuthGuard } from 'src/app/guards/auth';


const routesTask: Routes = [
  { path: 'task/:id', component: ListTaskComponent ,canActivate: [AuthGuard]},


];
@NgModule({
    imports: [RouterModule.forChild(routesTask)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
