import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArrayComponent } from './form-array.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RequestService } from 'src/app/http/services/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormArrayComponent', () => {
  let component: FormArrayComponent;
  let fixture: ComponentFixture<FormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [FormArrayComponent],
      providers: [RequestService, MatSnackBar, SnackbarService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form array', () => {
    expect(component).toBeTruthy();
  });

  it('should be form array', () => {
    const service: RequestService = TestBed.inject(RequestService);
    expect(service).toBeTruthy();
  });
});
