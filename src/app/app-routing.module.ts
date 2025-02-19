import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { PrivatecomponentComponent } from './components/privatecomponent/privatecomponent.component';
import { AuthorizedGuard } from './guard/Authorized.guard';

const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'todo', component: FirstcomponentComponent},
  {path: 'list', component: ListcomponentComponent},
  {path: 'private', component: PrivatecomponentComponent, canActivate: [AuthorizedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
