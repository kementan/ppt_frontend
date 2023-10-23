import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCuComponent } from './user-cu/user-cu.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserCuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
