import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hocsinh } from '../models/hocsinh';
import { Tintuc } from '../models/tintuc';
import { HocsinhService } from '../service/hocsinh.service';
import { TintucService } from '../service/tintuc.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hocsinh',
  templateUrl: './hocsinh.component.html',
  styleUrls: ['./hocsinh.component.scss']
})
export class HocsinhComponent implements OnInit {
  isSpinning = false;
  isCollapsed = false;
  hocsinh:Hocsinh=null;
  mahocsinh:string=this.tokenService.getUserName();

  tthoatdong:Tintuc;
  constructor( private hocsinhService: HocsinhService,
    private tokenService: TokenService,
    private tintucService: TintucService,
    private router: Router,) { }

  ngOnInit(): void {
    this.loaddata();
  }

  isvisible = false;
  isvisible2 = false;
  open(): void {
    this.isvisible = true;
  }
  search():void{
    this.isvisible2=true;
    this.loadhoatdong();
  }
public loaddata(){
  this.hocsinhService.detail(this.mahocsinh).subscribe(
    data =>this.hocsinh=data,
    err=>{     
      this.router.navigate(['/error-403']);
     }
);
}
  close(): void {
    this.isvisible = false;
  }
  close2(): void {
    this.isvisible2 = false;
  }
  onLogOut(): void {
    this.router.navigate(['/dang-nhap']);
    this.tokenService.logOut();
    window.location.reload();
  }

  public loadhoatdong() {
    this.tintucService.listhoatdong().subscribe(
      data => this.tthoatdong = data
    )
  }
}
