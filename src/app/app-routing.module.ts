import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'clients',
    component: ClientsListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/clients'
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
