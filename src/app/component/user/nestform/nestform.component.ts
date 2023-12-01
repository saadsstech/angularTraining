import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersInterface } from '../interface/usersInterface';
import { RequestService } from 'src/app/http/services/request.service';
import { UserConstacts } from '../user-constacts';

@Component({
  selector: 'app-nestform',
  templateUrl: './nestform.component.html',
  styleUrls: ['./nestform.component.scss']
})
export class NestformComponent {
  constructor(
    private fb: FormBuilder,
    private RequestService: RequestService
  ) { }

  // api link
  saveUserAPI: string = UserConstacts.userSave;

  // create nested form
  nestedForm = this.fb.group({
    id: [this.randomId()],
    firstName: [''],
    lastName: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    personalId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    profilePhoto: ['https://i.ibb.co/pKdGF9M/user-icon.png', [Validators.required]],
    mobileNumber: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    address: this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    }),
    date: ['', [Validators.required]],
  });


  randomId() {
    return Math.floor((2 + Math.random() * 0x999))
  }

  submit(form: any) {
    if (!form.invalid) {
      this.RequestService.save(form.value, this.saveUserAPI).subscribe((res: any) => {
        console.log("new user has been created");
        this.nestedForm.reset();
      })
    }
  }
}
