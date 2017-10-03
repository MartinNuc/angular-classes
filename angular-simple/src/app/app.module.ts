import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MySecondCompomentComponent } from './components/my-second-compoment/my-second-compoment.component';
import { TimestampListComponent } from './components/timestamp-list/timestamp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MySecondCompomentComponent,
    TimestampListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
