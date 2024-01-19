import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatSnackBar]
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
