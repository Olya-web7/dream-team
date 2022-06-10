import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
    selector: 'app-confirm-subject-delete',
    templateUrl: './confirm-subject-delete.component.html',
    styleUrls: ['./confirm-subject-delete.component.scss'],
})
export class ConfirmSubjectDeleteComponent implements OnInit, OnDestroy {
    subscription = new Subscription();
    subjectId: string = '';
    subjectName: string = '';

    constructor(
        private subjectsService: SubjectsService,
        public dialogRef: MatDialogRef<ConfirmSubjectDeleteComponent>
    ) {}

    ngOnInit(): void {
        this.subjectId = this.subjectsService.subjectIdDel;
        this.subjectName = this.subjectsService.subjectNameDel;
    }

    deleteOneSubject() {
        this.subscription.add(
            this.subjectsService.deleteSubject(this.subjectId).subscribe((data: any) => {
                console.log('this: ' + data);
            })
        );
        this.dialogRef.close(this.subjectId);
    }

    cancel() {
        this.dialogRef.close();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
