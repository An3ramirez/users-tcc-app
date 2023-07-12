import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './list/user-list.component';
import { UserFormComponent } from './form/user-form.component';

const routes: Routes = [
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: '',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
