import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { NestformComponent } from './nestform/nestform.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'user-listing',
        component: UsersListingComponent
      },
      {
        path: 'user-add-edit',
        component: AddEditUserComponent
      },
      {
        path: 'nested-form',
        component: NestformComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
