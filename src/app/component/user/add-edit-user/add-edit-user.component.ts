import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersInterface } from '../interface/usersInterface';
import { RequestService } from 'src/app/http/services/request.service';
import { UserConstacts } from '../user-constacts';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private RequestService: RequestService
  ) { 
    this.user = this.router.getCurrentNavigation()?.extras?.state?.['user']
  }

  user:any = {};
  isEditMode:boolean = false;
  buttonName:string = 'Submit'
  // api link
  saveUserAPI: string = UserConstacts.userSave;

  // create form
  basicForm = this.fb.group({
    id: [this.randomId()],
    firstName: [''],
    lastName: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    personalId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    profilePhoto: ['https://i.ibb.co/pKdGF9M/user-icon.png', [Validators.required]],
    mobileNumber: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  ngOnInit(): void {
    if(this.user?.id){
      this.basicForm.patchValue(this.user);
      // this.basicForm.setValue(this.user);
      this.isEditMode = true;
      this.buttonName = 'Edit';
    }
  }

  randomId() {
    return Math.floor((2 + Math.random() * 0x999))
  }

  submit(form: any) {
    if (!form.invalid) {
      this.RequestService.update(form.value, this.user.id, this.saveUserAPI).subscribe((res: any) => {
          console.log("data has been edited");
        //   this.basicForm.reset();
        })
      
      // this.RequestService.save(form.value, this.saveUserAPI).subscribe((res: any) => {
      //   console.log("new user has been created");
      //   this.basicForm.reset();
      // })
    };
  }

}
