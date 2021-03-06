import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photo.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      PhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
