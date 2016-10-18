import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  //template: "<h1> {{title}} {{firstName}}</h1>",
  templateUrl: "templates/dash.html",
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  title:string = 'Welcome, ';
  //person: Person;
  firstName: string;
  ficoScore: string;
  lastSignOn: string;
  ficoUrl: string;
  constructor(private accountService: AccountService){

  }

  ngOnInit(){
    console.log("HERE: " + window.location.pathname);
	this.accountService
	.getAll()
	.subscribe(p => {
		this.firstName = p[0].name;
        this.ficoScore = p[0].ficoScore;
        this.lastSignOn = p[0].lastSignOn;
        this.ficoUrl = p[0].ficoUrl;
	});

	//console.log(person);
   }

}
