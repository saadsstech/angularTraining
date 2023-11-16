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

  apiLink:string = UserConstacts.usersApi;

  filterUserList:Array<UsersInterface> = [];

  usersList = new MatTableDataSource<UsersInterface>(this.filterUserList);
  showColumns: string[] = UserConstacts.tableHeader;


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.RequestService.get(this.apiLink).subscribe((res:any) => {
      this.filterUserList = res;
      this.usersList = new MatTableDataSource<UsersInterface>(this.filterUserList);
      console.log(this.usersList);
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersList.filter = filterValue.trim().toLowerCase();
  }


}
