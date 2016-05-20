import 'zone.js';
import 'reflect-metadata';

import { Component } from '@angular/core';
import { userlistComponent } from './userlist.component.ts'

@Component({
	selector: 'hp-main',
	directives: [userlistComponent],
	templateUrl: 'app/templates/main.template.html'
})
export class mainComponent
{
	constructor(){}
}