import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserComponent } from './add-edit-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from 'src/app/http/services/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [AddEditUserComponent],
      providers: [RequestService, MatSnackBar, SnackbarService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create form array', () => {
    expect(component).toBeTruthy();
  });

  it('should be form array', () => {
    const service: RequestService = TestBed.inject(RequestService);
    expect(service).toBeTruthy();
  });

  it('should update form control value', () => {
    const control:any = component.basicForm.get('firstName');
    control.setValue('new value');
    expect(control.value).toBe('new value');
  });

  it('should have required validation error when control is empty', () => {
    const control:any = component.basicForm.get('firstName');
    control.setValue('');
    expect(control.hasError('required')).toBeTruthy();
  });

  // it('should call onSubmit method on form submission', () => {
  //   spyOn(component, 'submit');
  //   debugger
  //   const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
  //   formElement.dispatchEvent(new Event('submit'));
  //   // fixture.detectChanges();
  //   expect(component.submit).toHaveBeenCalled();
  // });
});
