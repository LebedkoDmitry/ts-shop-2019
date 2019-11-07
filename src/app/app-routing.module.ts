import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
