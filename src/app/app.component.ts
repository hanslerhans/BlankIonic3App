import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserSettings } from '../pages/UserSettings/UserSettings';
import { TestPage } from '../pages/TestPage/TestPage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;   // no idea what this is, copied from ionic menu template

  rootPage:any = HomePage;

  menuPages: Array<{title: string, component: any}> = 
  [
    { title: 'Home', component: HomePage },
    { title: 'Settings', component: UserSettings },
    { title: 'TestPage', component: TestPage }
  ];
  
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
      
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(p: any) {
    this.nav.setRoot(p.component);
  }
}

