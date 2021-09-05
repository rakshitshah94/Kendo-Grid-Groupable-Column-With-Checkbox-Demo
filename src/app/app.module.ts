import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
/**
 * Author Rakshit Shah
 * Link: 
 * */
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, GridModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
