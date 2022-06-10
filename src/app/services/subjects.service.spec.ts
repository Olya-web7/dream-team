import { TestBed } from '@angular/core/testing';
import { SubjectsService } from './subjects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubjectsService', () => {
  let service: SubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
