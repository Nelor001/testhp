
import 'zone.js';
import 'reflect-metadata';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide, enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { socketService } from 'app/services/socket.service.ts';
import { headerComponent } from 'app/components/header.hp.component.ts';
import { mainComponent } from 'app/components/main.hp.component.ts';
import { footerComponent } from 'app/components/footer.hp.component.ts';
//import 'es6-shim';

//enableProdMode();

@Component({
	selector:'hp',
	providers: [provide(Title, { useClass: Title}),
				provide(socketService, { useClass: socketService}) ], //Nelor: Provide takes 2 paramters: first is the label used to determine the depedency, second is a configuration object which in this form tells the Injector which class to use to satisfy it. Essentially that means this syntax satisfies truely decoupled dependencies, which is preferrable to the limited capabilities of the more common shorthand notation.
	template:`
	<hp-header>Header</hp-header>
	<hp-main>Main</hp-main>
	<hp-footer>Footer</hp-footer>`,
	styleUrls:['app/main.css'],
	directives: [ headerComponent, mainComponent, footerComponent ],
})
class hpComponent
{	
	//private _socket:any;
	
	constructor(private _titleService:Title/*, private _socketService:socketService*/)
	{
		_titleService.setTitle('testhp');
		//this._socket = _socketService.getIO();
	}
}

export default function()
{
	return bootstrap(hpComponent);
}