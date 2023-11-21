import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    UsersListingComponent
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
