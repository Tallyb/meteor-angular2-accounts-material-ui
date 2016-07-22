import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
export declare class UserMenu extends MeteorComponent {
    user: Meteor.User;
    constructor();
    logout(): void;
}
