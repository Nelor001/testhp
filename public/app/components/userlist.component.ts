import 'zone.js';
import 'reflect-metadata';

import { Component, provide } from '@angular/core';
import { userService } from '../services/user.service.ts';

@Component({
	selector:'hp-userlist',
	providers: [ provide(userService, { useClass: userService}) ],
	templateUrl: 'app/templates/userlist.template.html'
})
export class userlistComponent
{
	private userService:userService;
	private socket:any;
	private users:any[];
	
	constructor(_userService:userService, _socketService: socketService)
	{
		this.userService = _userService;
		this.socket  = _socketService.getIO();
	/*}
	
	ngOnInit()
	{*/
		this.socket.on('users created', (user) =>
		{
			this.users.push(user);
			console.log('Event: User <'+user.login+'> created.');
		});
		
		this.userService.find({})
		.then((_users) => { this.users = _users; },
		(err) => { console.log("hp->userlist->\n" + err); })
	}
}