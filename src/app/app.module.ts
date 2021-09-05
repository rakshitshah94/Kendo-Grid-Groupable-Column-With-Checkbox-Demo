import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/kendo-grid-groupable-columns-example-kendo-ui-for-angular-d49a434ed568?sk=032875562544863279f76790d0c82641
 * */
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, GridModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
