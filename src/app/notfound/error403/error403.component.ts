import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-error403',
  templateUrl: './error403.component.html',
  styleUrls: ['./error403.component.scss']
})
export class Error403Component implements OnInit {

  constructor( private tokenService: TokenService, ) { }

  ngOnInit(): void {
  }
logout(){
  this.tokenService.logOut();
}
}
