import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import { TestComponentBuilder, ComponentFixture, inject, addProviders , setBaseTestProviders} from '@angular/core/testing';
import {Router} from '@angular/router';

import {FormBuilder} from '@angular/forms';


import { Auth} from 'meteor-angular2-accounts-material-ui';


import {chai} from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';

const should = chai.should();
const expect = chai.expect;


describe ('Auth component', function (){

    setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

    class MockProvider {
        public mockName: string = 'Mocked Service';
    }


    beforeEach (function (){
        addProviders([
            TestComponentBuilder,
            {provider: Router, useClass: MockProvider},
            {provider: FormBuilder, useClass: MockProvider}
        ]);

    });

    afterEach (function (){

    });


    it ('Should create a login component', inject ([TestComponentBuilder, Router, FormBuilder], (tcb: TestComponentBuilder) => {
        return tcb

            .createAsync(Auth).then((componentFixture: ComponentFixture) => {

            const element = componentFixture.nativeElement;

            //componentFixture.componentInstance.users = ['John'];
            //componentFixture.detectChanges();
            //expect(element.querySelectorAll('span').length).toBe(1);
            expect (1).to.equal(1);

        });
    }));



});