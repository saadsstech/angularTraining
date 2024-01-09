import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { NestformComponent } from './nestform/nestform.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';



@NgModule({
  declarations: [
    UserComponent,
    UsersListingComponent,
    AddEditUserComponent,
    NestformComponent,
    FormArrayComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class UserModule { }
