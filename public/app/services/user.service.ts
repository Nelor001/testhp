/*import 'zone.js';
import 'reflect-metadata';*/

import { Injectable } from '@angular/core';
import { socketService } from './socket.service.ts';

@Injectable()
export class userService
{
	private socket:any;
	
	constructor(private _socketService:socketService)
	{
		this.socket = _socketService.getIO();
	}
	
	find(query:any)
	{
		return new Promise((resolve, reject) =>
		{
			this.socket.emit('users::find', query, (err, users) =>
			{
				if(err)
				{
					console.log('Error: userService.get() =>');
					console.error(err);
					reject(err);
				}
				else
				{
					console.log('userService.get() received users:');
					console.log(users);
					resolve(users);
				}
			});
		});
	}
}