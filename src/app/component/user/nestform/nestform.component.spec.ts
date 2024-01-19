import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestformComponent } from './nestform.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from 'src/app/http/services/request.service';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('NestformComponent', () => {
  let component: NestformComponent;
  let fixture: ComponentFixture<NestformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestService],
      declarations: [NestformComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(NestformComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be service', () => {
    const service: RequestService = TestBed.inject(RequestService);
    expect(service).toBeTruthy();
  });
});
