import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentModule } from './components/firstcomponent/firstcomponent.module';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { CoreModule } from './core/core.module';
import { PrivatecomponentComponent } from './components/privatecomponent/privatecomponent.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ShowUsersComponent } from './components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcomponentComponent,
    PrivatecomponentComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ShowUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    FirstcomponentModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
