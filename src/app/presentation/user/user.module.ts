import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './detail/user-detail.component';
import { UserFormComponent } from './form/user-form.component';
import { UserListComponent } from './list/user-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserDetailComponent, UserFormComponent, UserListComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
