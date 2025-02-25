import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { PrivatecomponentComponent } from './components/privatecomponent/privatecomponent.component';
import { AuthorizedGuard } from './guard/Authorized.guard';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';

const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'todo', component: FirstcomponentComponent},
  {path: 'list', component: ListcomponentComponent},
  {path: 'private', component: PrivatecomponentComponent, canActivate: [AuthorizedGuard]},
  {path: 'templateDrivenForm', component: TemplateDrivenFormComponent},
  {path: 'reactiveForm', component: ReactiveFormComponent},
  {path: 'usersApi', component: ShowUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
