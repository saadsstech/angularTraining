import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    UserComponent,
    UsersListingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
