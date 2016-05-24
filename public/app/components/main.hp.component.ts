import 'zone.js';
import 'reflect-metadata';

import { Component } from '@angular/core';
import { UserlistComponent } from './userlist.component.ts';

@Component({
	selector: 'hp-main',
	//templateUrl: 'app/templates/main.template.html',
	template:`
	<main>
		<hp-userlist>USERLIST</hp-userlist>
	</main>
	`/*,
	directives: [UserlistComponent]*/
})
export class mainComponent
{
	constructor(){}
}