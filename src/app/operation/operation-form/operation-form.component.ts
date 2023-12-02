import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OperationService } from '../operation.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Operation } from 'src/app/shared/interfaces/operation';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from '../../shared/error-modal/error-modal.component'

/**
 * Component responsible for rendering and handling the operation form.
 */
@Component({
  selector: 'operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.scss'],
})
export class OperationFormComponent implements OnInit {
  /**
   * Form group for operation inputs.
   */
  public operationForm!: FormGroup;

  /**
   * Reference to the loading bar service.
   */
  public loader = this.loadingBar.useRef();

  /**
   * Event emitter for when a new operation is added.
   */
  @Output() onNewOperation = new EventEmitter<Operation>();

  /**
   * Constructor for the operation form component.
   * @param fb - Service to create form group and controls.
   * @param operationService - Service to add operations.
   * @param loadingBar - Service for displaying a loading bar.
   * @param dialog - Service for opening Material dialogs.
   */
  constructor(
    private fb: FormBuilder,
    private operationService: OperationService,
    private loadingBar: LoadingBarService,
    private dialog: MatDialog
  ) { }

  /**
   * Getter for the 'x' form control.
   */
  get x() {
    return this.operationForm.get('x') as FormControl;
  }

  /**
   * Getter for the 'y' form control.
   */
  get y() {
    return this.operationForm.get('y') as FormControl;
  }

  /**
   * Getter for the 'n' form control.
   */
  get n() {
    return this.operationForm.get('n') as FormControl;
  }

  /**
   * OnInit lifecycle hook to initialize the form.
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Opens a modal dialog displaying an error message.
   * @param errorMessage - The message to be displayed in the dialog.
   */
  private openErrorDialog(errorMessage: string) {
    this.dialog.open(ErrorModalComponent, {
      data: { message: errorMessage }
    });
  }

  /**
   * Initializes the operation form with default values and validators.
   */
  private initForm() {
    this.operationForm = this.fb.group({
      x: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      y: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      n: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    });
  }

  /**
   * Prevents the default form submit action.
   * @param event - The event object associated with the submit action.
   */
  public preventInputSubmit(event: Event) {
    event.preventDefault();
  }

  /**
   * Handles the submission of the operation form.
   * Calls the operation service to add an operation and emits an event if successful.
   */
  public onSubmit() {
    this.loader.start();
    this.operationService.addOperation(this.operationForm.value).subscribe({
      next: (response) => {
        if (response.status) {
          this.onNewOperation.emit(this.operationForm.value);
          this.operationForm.reset();
        }
      },
      error: (error) => {
        this.loader.stop();
        this.openErrorDialog('Se ha producido un error al calcular el número entero máximo');
      },
      complete: () => this.loader.stop(),
    });
  }

}
