import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * A component that displays an error modal dialog.
 */
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  /**
   * Creates an instance of ErrorModalComponent.
   * @param {Object} data An object containing the data to be displayed in the modal.
   * @param {string} data.message The error message to display.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }
}
