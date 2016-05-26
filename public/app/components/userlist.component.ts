
import { Component, provide, NgZone} from '@angular/core';

import { userService } from '../services/user.service.ts';
import { socketService } from '../services/socket.service.ts';

@Component({
	selector:'hp-userlist',
	providers: [ provide(userService, { useClass: userService})
	,provide(socketService, { useClass: socketService})
	],
	templateUrl: 'app/templates/userlist.template.html'
	//,changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserlistComponent
{
	private userService:userService;
	private socket:any;
	public users:any[];/* =
	[ 	{ "login":"test" },
		{ "login":"test2"},
		{ "login":"test3"} ];*/
	private zone:NgZone;
	
	constructor(_userService:userService,_socketService: socketService)
	{
		this.zone = new NgZone({enableLargeStacktrace: true});
		this.userService = _userService;
		this.socket  = _socketService.getIO();
	}
	
	ngOnInit()
	{
		console.log(this.userService);
		this.userService.find()
		.then((_users) =>
		{
			console.log('_users:');
			console.log(_users);
			this.zone.run(() =>
			{
				this.users = _users;
			});
		},
		(err) =>
		{
			console.log("testhp->userlist->\n");
			console.log(err);
		});
		
		this.socket.on('users created', (user) =>
		{
			
			this.zone.run(() =>
			{
				this.users.push({"login":user.login});
				console.log('Event: User <'+user.login+'> created.');
			});
		});

		console.log('testhp: Userlist registered users created.')
		
		
	}
}