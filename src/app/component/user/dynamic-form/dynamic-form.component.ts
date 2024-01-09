import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) {
  }

  dynamicForm = this.fb.group({});

  dynamicFormArray: any = [
    {
      type: 'textbox',
      label: 'First Name',
      formFieldName: 'firstName',
    },
    {
      type: 'textbox',
      label: 'last Name',
      formFieldName: 'lastName',
    },
    {
      type: 'selectbox',
      label: 'country',
      formFieldName: 'country',
      values: [{ id: '0', value: 'India' }, { id: '1', value: 'USA' }],
    },
    {
      type: 'date',
      label: 'Date',
      formFieldName: 'date',
    }
  ];

  ngOnInit(): void {
    this.dynamicFormArray.forEach((field: any) => {
      this.dynamicForm.addControl(field.formFieldName, new FormControl(null));
    });

    console.log(this.dynamicForm);
  }

  submit(form: any) {

    if (!form.invalid) {
      console.log(form.value);
    }
  }

}
