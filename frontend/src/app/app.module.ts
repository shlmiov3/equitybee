import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MainComponent } from './components/main/main.component';
import { MainService } from './components/service';
import { MainFacade } from './components/facade';
import { MainState } from './components/state';
import { UrlDataComponent } from './components/url-data/url-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlDetailsComponent } from './components/url-details/url-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UrlDataComponent,
    UrlDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [    
    MainService,
    MainFacade,
    MainState,],
  bootstrap: [AppComponent]
})
export class AppModule { }
