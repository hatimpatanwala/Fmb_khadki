import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './components/home/home.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PwaService } from './services/pwa.service';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
const initializer = (pwaService: PwaService) => {
  return () => {
    console.log('running');
    pwaService.initPwaPrompt();
    return Promise.resolve();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromptComponent,
    LoaderComponent,
    SplashScreenComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately',
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [PwaService],
      multi: true,
      useFactory: initializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
