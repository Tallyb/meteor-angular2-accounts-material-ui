import { TypeDecorator } from '@angular/core';

import { Meteor } from 'meteor/meteor';

class InjectUserAnnotation {
  constructor(public propName = 'user') {}
}

export function InjectUser(propName?: string): (cls: any) => any {
  const annInstance = new InjectUserAnnotation(propName);
  const TYPE_DECORATOR: TypeDecorator = <TypeDecorator>function TypeDecorator(cls) {
    const propName = annInstance.propName;
    const fieldName = `_${propName}`;
    const injected = `${fieldName}Injected`;

    Object.defineProperty(cls.prototype, propName, {
      get: function() {
        if (!this[injected]) {
          this[fieldName] = Meteor.user();
          if (this.autorun) {
            this.autorun(() => {
              this[fieldName] = Meteor.user();
            }, true);
          }
          this[injected] = true;
        }
        return this[fieldName];
      },
      enumerable: true,
      configurable: false
    });
    return cls;
  };
  return TYPE_DECORATOR;
}




