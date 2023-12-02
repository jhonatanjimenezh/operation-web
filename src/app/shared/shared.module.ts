import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

/**
 * A shared module in Angular that encapsulates components, directives, and pipes
 * that are used across different parts of the application.
 * This module can be imported in any other module when these shared resources are needed.
 */
@NgModule({
  declarations: [
    // Shared components across the application
    ErrorModalComponent
  ],
  imports: [
    // CommonModule for common directives
    CommonModule,
    // MatDialogModule for Material dialog functionality
    MatDialogModule
  ],
  exports: [
  ],
})
export class SharedModule { }
