import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { SubjectsService } from './subjects.service';
import {environment} from "../../environments/environment";

describe('SubjectsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectsService],
      imports: [HttpClientTestingModule],
    });
  });

  describe('getSubjects', () => {
    let subjectsService: SubjectsService;
    let httpTestingController: HttpTestingController;
    let mockSubject: any;

    beforeEach(() => {
      subjectsService = TestBed.get(SubjectsService);
      httpTestingController = TestBed.get(HttpTestingController);
      mockSubject = {
        subject_id: '1',
        subject_name: 'Вища математика',
        subject_description: 'Один із фундаментальних предметів',
      };
    });

    it('should GET a list of subjects', () => {
      subjectsService.getSubjects().subscribe((subjects) => {
        expect(subjects[0]).toEqual(mockSubject);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}/Subject/getRecords`);
      request.flush([mockSubject]);
      httpTestingController.verify();
    });
  });
});
