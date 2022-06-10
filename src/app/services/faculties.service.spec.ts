import { FacultiesService } from './faculties.service';
import { HttpClient } from "@angular/common/http";
import { Faculty } from "../interfaces/faculty.model";
import { defer } from "rxjs";

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('FacultiesService', () => {
  let facultiesService: FacultiesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    facultiesService = new FacultiesService(httpClientSpy);
  });

  it('should be created', () => {
    expect(facultiesService).toBeTruthy();
  });

  it('should return expected faculties (HttpClient called once)', (done: DoneFn) => {
    const expectedFaculties: Faculty[] = [
      {
        faculty_id: '1',
        faculty_name: 'Інститут інформаційних технологій',
        faculty_description: 'факультет справжніх айтішників'
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedFaculties));

    facultiesService.getFaculties().subscribe({
      next: faculties => {
        expect(faculties)
          .withContext('expected faculties')
          .toEqual(expectedFaculties);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
