import {Page, ActionSheet, NavController} from 'ionic-framework/ionic';
import {Component, Input} from 'angular2/core';

import {FactService} from '../services/FactService';

@Component({
  selector: 'fact-card',
  providers: [FactService]
  template: `
    <ion-card [class.isFavorite]="isFavorite" (click)="showFactOptions()">
      <ion-card-content>
        {{ fact.text }}
      </ion-card-content>
    </ion-card>
  `

})

export class FactCard {

  @Input() fact;

  factService: FactService
  nav: NavController

  constructor(factService: FactService, nav: NavController) {

    this.factService = factService;

    this.nav = nav;

  }

  showFactOptions() {

    const actionSheet = ActionSheet.create({
      title: 'Fact Options',
      buttons: [
        {
          text: 'Share',
          handler: () => {

            window.plugins.socialsharing.share(this.fact.text);

          }
        }, {
          text: 'Remind Me Tomorrow',
          handler: () => {

            cordova.plugins.notification.local.schedule({
              id: Math.floor(Math.random() * 1000000),
              title: this.fact.text,
              at: Date.now() + (1000 * 60 * 60 * 24)
            });

          }
        }, {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    });

    this.nav.present(actionSheet);

  }

}
