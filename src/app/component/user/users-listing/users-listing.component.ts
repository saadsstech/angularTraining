import { Component, OnInit } from '@angular/core';
import { UserConstacts } from '../user-constacts';
import { RequestService } from 'src/app/http/services/request.service';
import { UsersInterface } from './usersInterface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit{

  constructor(private RequestService: RequestService){}
  
  // api link
  apiLink:string = UserConstacts.usersApi;
  // user table
  UserListData:Array<UsersInterface> = [];
  usersList = new MatTableDataSource<UsersInterface>(this.UserListData);
  showColumns: string[] = UserConstacts.tableHeader;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.RequestService.get(this.apiLink).subscribe((res:any) => {
      this.UserListData = res;
      this.usersList = new MatTableDataSource<UsersInterface>(this.UserListData);
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersList.filter = filterValue.trim().toLowerCase();
  }



}
