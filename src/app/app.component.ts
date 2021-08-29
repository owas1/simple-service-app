import { Component, OnInit } from '@angular/core';
import { AccountSerivce } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

accounts: {name: string, status:string}[]=[];

constructor(private accountService: AccountSerivce) {}

ngOnInit(){
  this.accounts = this.accountService.accounts;
}

}
