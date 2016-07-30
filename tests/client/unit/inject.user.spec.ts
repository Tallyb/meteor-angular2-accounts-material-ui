import {Component} from '@angular/core';
import {InjectUser} from 'meteor-angular2-accounts-material-ui';
import {Meteor}  from 'meteor/meteor';

import {chai} from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';

const should = chai.should();
const expect = chai.expect;

describe('Logged tests', function() {

    it ('should be logged', function (){
        expect (1).to.equal(1);
    });

});




@Component({
    selector: 'main',
    directives: [],
    template: '<div></div>'
})
@InjectUser

export class TestComponent  {
    user: Meteor.User;

    constructor() {
    }
}

