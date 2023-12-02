import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/challenge', pathMatch: 'full' },
  {
    path: 'challenge',
    loadChildren: () =>
      import('./operation/operation.module').then((m) => m.ChallengeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
