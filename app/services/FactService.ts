import {Injectable} from 'angular2/core';

import {Facts} from '../data/facts';

@Injectable()
export class FactService {

  getFacts() {

    return Facts;

  }

  getRandomFact() {

    return Facts[Math.floor(Math.random() * Facts.length)];

  }

}
