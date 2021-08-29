import { Component, Input } from '@angular/core';
import { IAccount } from '../shared/account.interface';
import { AccountSerivce } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-dynamic-account',
  templateUrl: './dynamic-account.component.html',
  styleUrls: ['./dynamic-account.component.css']
})
export class DynamicAccountComponent {

  @Input() account!: IAccount;
  @Input() id!:number;

  constructor( private loggingService: LoggingService,
              private accountService: AccountSerivce) { }


  onSetTo(status: string){
    this.accountService.updateStatus(this.id, status)
      // this.loggingService.logStatusChange(status)
      this.accountService.statusUpdated.emit(status);
    }

}
