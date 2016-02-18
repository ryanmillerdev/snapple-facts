import {App, Platform} from 'ionic-framework/ionic';
import {FactsPage} from './pages/facts/facts';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = FactsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      console.info('We\'re ready for business!');

    });
  }
}
