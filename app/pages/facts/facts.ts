import {Page, ActionSheet, NavController} from 'ionic-framework/ionic';

import {Fact} from '../../typings/fact';

import {FactService} from '../../services/FactService';
import {FactCard} from '../../components/FactCard';

@Page({
  templateUrl: 'build/pages/facts/facts.html',
  providers: [FactService],
  directives: [FactCard]
})
export class FactsPage {

  factService: FactService,
  facts: Array<Fact>
  nav: NavController

  constructor(factService: FactService, nav: NavController) {

    this.factService = factService;

    this.facts = this.factService.getFacts();

    this.nav = nav;

  }

  onFactCardClicked(event) {

    // This method simply serves to demostrate the usage of @Output()
    // from within FactCard. Use (click) on the top-level component
    // markup instead if you need to do something real.
    console.info('Hey! You clicked a fact card! Here is the event: ' + event);

  }

  sendRandomFact() {

    const randomFact = this.factService.getRandomFact();

    const actionSheet = ActionSheet.create({
      title: 'Show me a random fact in...',
      buttons: [
        {
          text: 'In A Few Seconds',
          handler: () => {

            cordova.plugins.notification.local.schedule({
              id: Math.floor(Math.random() * 1000000),
              title: randomFact.text,
              at: Date.now() + 10000
            });

          }
        },
        {
          text: 'One Hour',
          handler: () => {

            cordova.plugins.notification.local.schedule({
              id: Math.floor(Math.random() * 1000000),
              title: randomFact.text,
              at: Date.now() + (1000 * 60 * 60)
            });

          }
        }, {
          text: 'One Day',
          handler: () => {

            cordova.plugins.notification.local.schedule({
              id: Math.floor(Math.random() * 1000000),
              title: randomFact.text,
              at: Date.now() + (1000 * 60 * 60 * 24)
            });

          }
        }, {
          text: 'Sometime',
          handler: () => {

            cordova.plugins.notification.local.schedule({
              id: Math.floor(Math.random() * 1000000),
              title: randomFact.text,
              at: Math.floor((Date.now() + (1000 * 60 * 60 * 24)) * Math.random())
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
