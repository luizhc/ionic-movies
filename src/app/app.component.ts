import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configService: ConfigurationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // open intro only once
      const config = this.configService.getConfigData();
      if (!config) {
        this.configService.setConfigData(true);
        this.router.navigate(['']);
      } else {
        this.configService.setConfigData(false);
        this.router.navigate(['tabs/tabs/tab5']);
      }

    });
  }
}
