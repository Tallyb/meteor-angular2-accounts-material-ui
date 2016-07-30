import { Component }    from '@angular/core';
import {Auth}           from './auth';

const template = `
    <auth [mode]="mode"></auth>
`;

@Component({
  selector: 'login',
  directives: [Auth],
  template ,
})
export class Login {
    public mode: string = 'login';
}

@Component({
    selector: 'signup',
    directives: [Auth],
    template ,
})
export class Signup {
    public mode: string = 'signup';
}

@Component({
    selector: 'recover',
    directives: [Auth],
    template ,
})
export class Recover {
    public mode: string = 'recover';
}
