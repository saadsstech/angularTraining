import { Component, OnInit, ViewChild } from '@angular/core';
import { UserConstacts } from '../user-constacts';
import { RequestService } from 'src/app/http/services/request.service';
import { UsersInterface } from '../interface/usersInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GlobalConstants } from '../../../constants/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit{

  constructor(private RequestService: RequestService, private router: Router){}

  // pagination
  @ViewChild(MatPaginator) paginator: MatPaginator | any = 5;
  pageIndex:number = GlobalConstants.pageIndex;
  pageSize:number[] = GlobalConstants.pageSize;
  @ViewChild(MatSort) sort: MatSort | any; //sort header table

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
      this.usersList.paginator = this.paginator;
      this.usersList.sort = this.sort;
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersList.filter = filterValue.trim().toLowerCase();
  }

  handlePage(e: any){
    this.pageIndex = e.pageIndex;
  }

  edit(data:UsersInterface){
    debugger
    this.router.navigate(['/users/user-add-edit'], {state:{user:data}})
  }

}
