import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestformComponent } from './nestform.component';

describe('NestformComponent', () => {
  let component: NestformComponent;
  let fixture: ComponentFixture<NestformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestformComponent]
    });
    fixture = TestBed.createComponent(NestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
