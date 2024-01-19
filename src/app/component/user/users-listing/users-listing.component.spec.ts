import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListingComponent } from './users-listing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RequestService } from 'src/app/http/services/request.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('UsersListingComponent', () => {
  let component: UsersListingComponent;
  let fixture: ComponentFixture<UsersListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsersListingComponent],
      providers: [RequestService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(UsersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be user list', () => {
    const service: RequestService = TestBed.inject(RequestService);
    expect(service).toBeTruthy();
  });
});
