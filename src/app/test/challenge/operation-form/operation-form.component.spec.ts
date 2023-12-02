import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { OperationFormComponent } from '../../../operation/operation-form/operation-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { OperationService } from '../../../operation/operation.service';
import { defer, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_OPERATION_ERROR } from 'src/app/shared/constants/mocks';

/**
 * Test suite for OperationFormComponent.
 */
describe('OperationFormComponent', () => {
    let component: OperationFormComponent;
    let fixture: ComponentFixture<OperationFormComponent>;
    let mockOperationService: any;
    let mockLoadingBarService: any;
    let mockFormBuilder: FormBuilder;
    let mockOnNewOperation: any;
    let mockMatDialog: any;

    /**
   * Set up TestBed configuration for each test.
   */
    beforeEach(async () => {
        mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['useRef']);
        mockOperationService = jasmine.createSpyObj('OperationService', ['addOperation']);
        mockLoadingBarService = jasmine.createSpyObj('LoadingBarService', ['useRef']);
        mockOnNewOperation = jasmine.createSpyObj('EventEmitter', ['emit']);
        mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);


        await TestBed.configureTestingModule({
            declarations: [OperationFormComponent],
            imports: [ReactiveFormsModule],
            providers: [
                FormBuilder,
                { provide: OperationService, useValue: mockOperationService },
                LoadingBarService,
                { provide: MatDialog, useValue: mockMatDialog },
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    /**
   * Create component instance before each test.
   */
    beforeEach(() => {
        fixture = TestBed.createComponent(OperationFormComponent);
        component = fixture.componentInstance;
        mockFormBuilder = TestBed.inject(FormBuilder);
        mockMatDialog = TestBed.inject(MatDialog);
        fixture.detectChanges();
    });

    /**
   * Test to ensure the component is created.
   */
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /**
     * Test to check if the form is invalid when empty.
     */
    it('form invalid when empty', () => {
        expect(component.operationForm.valid).toBeFalsy();
    });

    /**
     * Test to check if the form is valid when filled correctly.
     */
    it('form valid when filled correctly', () => {
        component.operationForm.controls['x'].setValue('5');
        component.operationForm.controls['y'].setValue('1');
        component.operationForm.controls['n'].setValue('10');
        expect(component.operationForm.valid).toBeTruthy();
    });

    /**
     * Test to ensure addOperation is called on form submission.
     */
    it("should call addOperation on form submit",
        fakeAsync(() => {
            mockOperationService.addOperation.and.returnValue(of({ status: true }));
            component.operationForm.controls['x'].setValue('5');
            component.operationForm.controls['y'].setValue('1');
            component.operationForm.controls['n'].setValue('10');
            component.onNewOperation = mockOnNewOperation;
            component.onSubmit();
            flush();
            expect(mockOnNewOperation.emit).toHaveBeenCalled();
        }));

    /**
     * Test to verify if the error handling works as expected on form submission failure.
     */
    it("should call addOperation on form error",
        fakeAsync(() => {
            mockOperationService.addOperation.and.returnValue(defer(() => Promise.reject(MOCK_OPERATION_ERROR)));
            component.onNewOperation = mockOnNewOperation;
            component.onSubmit();
            flush();
            expect(mockMatDialog.open).toHaveBeenCalled();
        }));

});
