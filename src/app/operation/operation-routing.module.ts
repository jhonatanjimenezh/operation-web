import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeListComponent } from './operation-list/operation-list.component';

/**
 * Defines the routes for the challenge features within the application.
 * @type {Routes}
 */
const routes: Routes = [{ path: '', component: ChallengeListComponent }];

/**
 * NgModule that includes the router configuration for the challenge module.
 * It leverages lazy loading to load the challenge components as part of a feature module.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Registers routes as child routes of the application.
  ],
})
export class ChallengeRoutingModule {}
