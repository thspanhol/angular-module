import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentModule } from './components/firstcomponent/firstcomponent.module';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { CoreModule } from './core/core.module';
import { PrivatecomponentComponent } from './components/privatecomponent/privatecomponent.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListcomponentComponent,
    PrivatecomponentComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    FirstcomponentModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
