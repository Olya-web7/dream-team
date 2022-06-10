import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Specialty } from '../interfaces/specialty.model';
import { SpecialtiesService } from './specialties.service';

let service: SpecialtiesService;
let httpClientSpy: jasmine.SpyObj<HttpClient>;

describe('SpecialtiesService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpecialtiesService(httpClientSpy);
    TestBed.configureTestingModule({
        providers: [SpecialtiesService], 
        imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    service = TestBed.inject(SpecialtiesService);
    expect(service).toBeTruthy();
  });


  it('should return expected specialties', (done: DoneFn) => {
      const expectedSpecialties: Specialty[] = [
          {
            speciality_id: '1',
            speciality_code: '123',
            speciality_name: 'example name'
          }
      ];

      httpClientSpy.get.and.returnValue(of(expectedSpecialties));

      service.getSpecialties().subscribe({
          next: specialties => {
              expect(specialties)
              .withContext('expected specialties')
              .toEqual(expectedSpecialties);
              done();
          }, 
          error: done.fail
      });
  });
});
