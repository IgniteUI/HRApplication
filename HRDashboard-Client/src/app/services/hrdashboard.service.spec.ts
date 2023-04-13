import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HRDashboardService } from './hrdashboard.service';

describe('HRDashboardService', () => {
  let service: HRDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HRDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
