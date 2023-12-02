import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { ChallengeListComponent } from '../../../operation/operation-list/operation-list.component';
import { OperationService } from '../../../operation/operation.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defer, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MOCK_OPERATION, MOCK_OPERATION_ERROR } from 'src/app/shared/constants/mocks';

/**
 * Test suite for ChallengeListComponent.
 */
describe('ChallengeListComponent', () => {
    let component: ChallengeListComponent;
    let fixture: ComponentFixture<ChallengeListComponent>;
    let mockOperationService: any;
    let mockMatDialog: any;
    let mockLoadingBarService: any;

    /**
     * Set up TestBed configuration for each test.
     */
    beforeEach(waitForAsync(() => {
        mockOperationService = jasmine.createSpyObj('OperationService', ['getOperations']);
        mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
        mockLoadingBarService = jasmine.createSpyObj('LoadingBarService', ['useRef']);

        TestBed.configureTestingModule({
            declarations: [ChallengeListComponent],
            imports: [MatTableModule, BrowserAnimationsModule],
            providers: [
                { provide: OperationService, useValue: mockOperationService },
                { provide: MatDialog, useValue: mockMatDialog },
                LoadingBarService,
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    /**
     * Create component instance before each test.
     */
    beforeEach(() => {
        fixture = TestBed.createComponent(ChallengeListComponent);
        component = fixture.componentInstance;
        mockMatDialog = TestBed.inject(MatDialog);
        mockOperationService.getOperations.and.returnValue(of({
            status: true,
            data: MOCK_OPERATION
        }));
        fixture.detectChanges();
    });

    /**
     * Test to ensure the component is created.
     */
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /**
     * Test to check if getOperations is called and handles data correctly.
     */
    it("should call getOperations on form submit",
        fakeAsync(() => {

            mockOperationService.getOperations.and.returnValue(of({
                status: true,
                data: MOCK_OPERATION
            }));
            component.getResults();
            flush();
            expect(component.dataSource.data).toEqual(MOCK_OPERATION);
        }));

    /**
     * Test to verify if the error handling works as expected when getOperations fails.
     */
    it("should call getOperations on form error",
        fakeAsync(() => {
            mockOperationService.getOperations.and.returnValue(defer(() => Promise.reject(MOCK_OPERATION_ERROR)));
            component.getResults();
            flush();
            expect(mockMatDialog.open).toHaveBeenCalled();
        }));

});
