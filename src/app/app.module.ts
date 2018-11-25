import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserSettings } from '../pages/UserSettings/UserSettings';
import { SettingsProvider } from '../providers/settings/settings';
import { TestPage } from '../pages/TestPage/TestPage';
import { SingleSelectorComponent } from "../components/single-selector/single-selector";
import { BooleanSelectorComponent } from "../components/boolean-selector/boolean-selector";
import { NavBarComponent } from "../components/navbar/NavBar";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserSettings,
    TestPage,
    SingleSelectorComponent,
    BooleanSelectorComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserSettings,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {}
