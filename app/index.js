import 'zone.js';
import 'reflect-metadata';


import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
	selector:'hp',
	template:'<div>LOADED</div>'
})
class hpComponent { }

export default function()
{
	bootstrap(hpComponent);
}