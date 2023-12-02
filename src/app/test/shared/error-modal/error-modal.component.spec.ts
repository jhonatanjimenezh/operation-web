import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorModalComponent } from 'src/app/shared/error-modal/error-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

/**
 * Test suite for ErrorModalComponent.
 */
describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent;
  let fixture: ComponentFixture<ErrorModalComponent>;
  const errorMessage = 'Ha ocurrido un error al guardar la información.';

  /**
   * Set up TestBed configuration for each test.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ErrorModalComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: errorMessage } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  /**
   * Create component instance before each test.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test to ensure the component is created.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test to check if the error message is displayed as expected.
   */
  it('should display error message', () => {
    expect(component.data.message).toBe(errorMessage);
  });

});
