import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ChallengeListComponent } from './operation-list/operation-list.component';
import { ChallengeRoutingModule } from './operation-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { OperationFormComponent } from './operation-form/operation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import localeEs from '@angular/common/locales/es';
import { LoadingBarModule } from '@ngx-loading-bar/core';

registerLocaleData(localeEs);

/**
 * The ChallengeModule is an NgModule that deals with all challenge-related components
 * and services in the application. It registers locale data for Spanish and provides
 * necessary Angular Material components and modules that are required for the challenge features.
 */
@NgModule({
  declarations: [
    // Components that belong to this module
    ChallengeListComponent,
    OperationFormComponent,
  ],
  imports: [
    // Shared module and other Angular modules required for the challenge components
    CommonModule,
    RouterModule,
    SharedModule,
    LoadingBarModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    ChallengeRoutingModule,
    // ... other modules ...
  ],
  exports: [
    // Exported Material modules that can be used in other modules
    MatTableModule,
    MatButtonModule,
  ],
  providers: [
    // This provider sets the locale to Spanish for this module
    { provide: LOCALE_ID, useValue: 'es' },
  ],
})
export class ChallengeModule {
  constructor() {
    // Register Spanish locale data upon module initialization
    registerLocaleData(localeEs);
  }
}
