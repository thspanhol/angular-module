import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentModule } from './components/firstcomponent/firstcomponent.module';
import { ListcomponentComponent } from './components/listcomponent/listcomponent.component';
import { CoreModule } from './core/core.module';
import { PrivatecomponentComponent } from './components/privatecomponent/privatecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcomponentComponent,
    PrivatecomponentComponent,
  ],
  imports: [
    BrowserModule,
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
