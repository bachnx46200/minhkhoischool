import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';
import { ToastrService } from 'ngx-toastr';
import { Tintuc } from 'src/app/models/tintuc';
import { TintucService } from 'src/app/service/tintuc.service';

@Component({
  selector: 'app-qlhoadong',
  templateUrl: './qlhoadong.component.html',
  styleUrls: ['./qlhoadong.component.scss']
})
export class QlhoadongComponent implements OnInit {
  constructor(private notification: NzNotificationService,
    private tintucService: TintucService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  tintuc: Tintuc;
  ngOnInit(): void {
    this.loadhoatdong();
  }
  visible = false;
  position = 'bottomLeft';
value:string;

  confirm(id) {
    this.tintucService.deletetintuc(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loadhoatdong();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    )
    this.xoa('bottomLeft');
  }

  xoa(position: NzNotificationPlacement): void {
    this.notification.blank(
      'Xóa thành công',
      '',
      { nzPlacement: position }
    );

  }

  public loadhoatdong() {
    this.tintucService.listhoatdong().subscribe(
      data => this.tintuc = data
    )
  }
  timkiem():void{
    this.tintucService.timkiemhd(this.value).subscribe(
      data=>this.tintuc=data
    )
  }
}
