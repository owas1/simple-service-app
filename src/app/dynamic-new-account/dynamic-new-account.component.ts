import { Component } from '@angular/core';
import { AccountSerivce } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-dynamic-new-account',
  templateUrl: './dynamic-new-account.component.html',
  styleUrls: ['./dynamic-new-account.component.css']
})
export class DynamicNewAccountComponent {

  constructor( private loggingService: LoggingService,
               private accountService: AccountSerivce) {
                 this.accountService.statusUpdated.subscribe(
                   (status:string) => alert('New Status: '+ status)
                 );
                }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus)
  }

}
