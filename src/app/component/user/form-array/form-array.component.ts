import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ProjectsInterface } from '../interface/usersInterface';
import { RequestService } from 'src/app/http/services/request.service';
import { UserConstacts } from '../user-constacts';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private RequestService: RequestService,
    private snackbar: SnackbarService
  ) {
    // this.user = this.router.getCurrentNavigation()?.extras?.state?.['user']
  }

  ProjectsListData: Array<any> = [];

  isEditMode: boolean = false;
  buttonName: string = 'Submit'
  // api link
  saveUserAPI: string = UserConstacts.projectSave;

  // create form
  ArrayForm = this.fb.group({
    id: [this.randomId()],
    firstName: [''],
    lastName: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    projects: this.fb.array([
      this.fb.group({
        position: ['', [Validators.required]],
        name: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        symbol: [''],
        description: ['', [Validators.required]]
      })
    ]),
  });

  ngOnInit(): void {
    // this.getProjects();
  }

  randomId() {
    return Math.floor((2 + Math.random() * 0x999))
  }

  submit(form: any) {

    if (!form.invalid) {
      switch (this.buttonName) {
        case "Submit": {
          this.RequestService.save(form.value, this.saveUserAPI).subscribe((res: any) => {
            this.snackbar.openSnackBar("data has been saved", "Close");
          });
          break;
        }
        case "Edit": {
          this.RequestService.update(form.value, this.ProjectsListData[0].id, this.saveUserAPI).subscribe((res: any) => {
            this.snackbar.openSnackBar("data has been edited", "Close");
          });
          break;
        }
      }
    }
  }

  getProjects() {
    this.RequestService.get(this.saveUserAPI).subscribe((res: any) => {
      this.ProjectsListData = res;
      if (this.ProjectsListData[0].id) {
        console.log(this.ProjectsListData[0]);
        let projectsData = this.ProjectsListData[0].projects;

        for (let index = 1; index < projectsData.length; index++) {
          this.addItem()
        }

        this.ArrayForm.patchValue(this.ProjectsListData[0]);
        this.isEditMode = true;
        this.buttonName = 'Edit';
      }
    });
  }

  // start array form code 
  get itemControls(): any {
    return this.ArrayForm.get('projects') as FormArray;
  }

  removeItem(index: any) {
    this.itemControls.removeAt(index);
  }

  addItem() {
    this.itemControls.push(
      this.fb.group({
        position: ['', [Validators.required]],
        name: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        symbol: [''],
        description: ['', [Validators.required]]
      })
    )
  }



}
