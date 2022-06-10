import { TestBed, inject } from '@angular/core/testing';
import { SubjectsService } from './subjects.service';
import { of } from 'rxjs';
import { SubjectModel } from '../interfaces/subject.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

let service: SubjectsService;
let httpClientSpy: jasmine.SpyObj<HttpClient>;

describe('SpecialtiesService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SubjectsService(httpClientSpy);
    TestBed.configureTestingModule({
        providers: [SubjectsService], 
        imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    service = TestBed.inject(SubjectsService);
    expect(service).toBeTruthy();
  });


  it('should return expected specialties', (done: DoneFn) => {
      const expectedSubjects: SubjectModel[] = [
          {
            subject_id: '1',
            subject_name: 'Вища математика',
            subject_description: 'Один із фундаментальних предметів',
          }
      ];

      httpClientSpy.get.and.returnValue(of(expectedSubjects));

      service.getSubjects().subscribe({
          next: subjects => {
              expect(subjects)
              .withContext('expected specialties')
              .toEqual(expectedSubjects);
              done();
          }, 
          error: done.fail
      });
  });
});
