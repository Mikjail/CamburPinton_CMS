
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { reducers } from './app.reducer';

import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

import { ProductModule } from './products/products.module';
import { ProductService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ProductModule,
    StoreModule.forRoot(reducers),
    AuthModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
