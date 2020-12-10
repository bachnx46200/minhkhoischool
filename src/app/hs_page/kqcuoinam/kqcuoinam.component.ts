import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bangdiem } from 'src/app/models/bangdiem';
import { BangdiemDto } from 'src/app/models/DTO/bangdiem-dto';
import { Lop } from 'src/app/models/lop';
import { BangdiemService } from 'src/app/service/bangdiem.service';
import { LophocService } from 'src/app/service/lophoc.service';
import { NamhocService } from 'src/app/service/namhoc.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-kqcuoinam',
  templateUrl: './kqcuoinam.component.html',
  styleUrls: ['./kqcuoinam.component.scss']
})
export class KqcuoinamComponent implements OnInit {

  isSpinning = false;

  bangdiem: Bangdiem;
  bangdiemcuoinam:BangdiemDto;
  lop: Lop;
  manguoidung: string = this.tokenService.getUserName();
  selectedValuelophoc =null;
  constructor(private bangdiemService: BangdiemService,
    private tokenService: TokenService,
    private lophocService: LophocService,) { }

    ngOnInit(): void {
      this.loadnamhoc();
    }
    public loadnamhoc() {
      this.lophocService.listlophoc(this.manguoidung).subscribe(
        data=>this.lop=data   
      );
     
  
    }
  timkiem(){
    this.bangdiemService.listdiem(this.manguoidung,this.selectedValuelophoc).subscribe(
      data=>this.bangdiemcuoinam=data
    )
  }

}
