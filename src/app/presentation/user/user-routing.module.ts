import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './form/user-form.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: '',
    component: ContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
