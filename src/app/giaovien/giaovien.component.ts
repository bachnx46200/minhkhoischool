import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Giaovien } from '../models/giaovien';
import { DaotaoService } from '../service/daotao.service';

import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.scss']
})
export class GiaovienComponent implements OnInit {

  isvisible=false;
  giaovien:Giaovien;
  magiaovien:string=this.tokenService.getUserName();
  constructor( 
    private daotaoService: DaotaoService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router,
   
  ) { }

  ngOnInit(): void {
   this.load();
  }
  open(): void {
    this.isvisible = true;
  }
  public load():void{
    this.daotaoService.detail(this.magiaovien).subscribe(
      data =>this.giaovien=data );
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  close(): void {
    this.isvisible = false;
  }

}
