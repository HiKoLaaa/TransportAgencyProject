import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [AuthService]
})
export class ServiceModule { }
