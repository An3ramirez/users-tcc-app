import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './form/user-form.component';
import { UserListComponent } from './list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [UserFormComponent, UserListComponent, ContainerComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
