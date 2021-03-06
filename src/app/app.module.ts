import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasListComponent } from './areas-list/areas-list.component';
import { AreasComponent } from './areas/areas.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasListComponent,
    AreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
