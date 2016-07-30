import {Component, enableProdMode, NgZone} from '@angular/core';

import {ObservableWrapper, TimerWrapper} from '@angular/core/src/facade/async';

import {MeteorComponent, MeteorApp, DataObserver} from 'angular2-meteor';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

import {generateData, Tasks} from '../../generate_data';

enableProdMode();

@Component({
  selector: 'todos',
  template: `
  <ul *ngFor="let task of tasks">
    <li class="task" id="{{task._id}}">
      {{task.text}}
    </li>
  </ul>`
})
export class Todos extends MeteorComponent {
  constructor() {
    super();

    this.subscribe('tasks');

    this.tasks = Tasks.find();
  }
}

function onStable(ngZone, cb) {
  if (!ngZone.hasPendingMacrotasks &&
      !ngZone.hasPendingMicrotasks) {
    cb();
    return;
  }

  let sub = ObservableWrapper.subscribe(
    ngZone.onStable, () => {
      if (!ngZone.hasPendingMicrotasks) {
        ObservableWrapper.dispose(sub);
        cb();
      }
    });
};

describe('bootstrap', () => {
  let el;
  beforeEach(function() {
    el = document.createElement('todos');
    document.body.appendChild(el);
  });

  afterEach(function() {
    document.body.removeChild(el);
  });

  it('MeteorComponent', done => {
    generateData().then(() => {
      bootstrap(Todos).then(compRef => {
        let ngZone = compRef.injector.get(NgZone);

        onStable(ngZone, () => {
          DataObserver.onReady(() => {
            onStable(ngZone, () => {
              expect($('.task', el).size()).to.equal(10);
              done();
            });
          })
        });
      });
    })
  });
});
