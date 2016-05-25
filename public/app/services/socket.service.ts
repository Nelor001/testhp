import 'zone.js';
import 'reflect-metadata';

import io from '.././../socket.io/socket.io.js';
import { Injectable } from '@angular/core';

var globalSocket = io(); //io() defaults to the pages root folder.

//To insert a socket for use in a Component it needs to be fit for DI, meaning this Class is a wrapper around a websocket that gets docorated with @Injectable.
@Injectable()
export class socketService
{
	private _socket:any; //This should make sure all components run through the same Websocket.
	
	constructor(){
		this._socket = globalSocket;
	}
	
	getIO() { return this._socket; } //A component can call this method to retireve a useable instane of the socket in its constructor.
}