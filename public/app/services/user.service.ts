import 'zone.js';
import 'reflect-metadata';

import { Injectable } from '@angular/core';

@Injectable()
export class userService
{
	private _socket:any;
	
	constructor(private _socketService:socketService)
	{
		this._socket = _socketService.getIO();
	}
	
	find(query:any)
	{
		socket.emit('users::find', query, (err, users) =>
		{
			if(err) { return Promise.reject(err); }
			else	{ return Promise.resolve(users); }
		});
	}
}