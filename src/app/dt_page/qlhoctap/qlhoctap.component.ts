import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';
import { ToastrService } from 'ngx-toastr';
import { Tintuc } from 'src/app/models/tintuc';
import { TintucService } from 'src/app/service/tintuc.service';




interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-qlhoctap',
  templateUrl: './qlhoctap.component.html',
  styleUrls: ['./qlhoctap.component.scss']
})
export class QlhoctapComponent implements OnInit {

  constructor(private notification: NzNotificationService,
    private tintucService: TintucService,
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
    console.log(id);
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
    this.tintucService.listhoctap().subscribe(
      data => this.tintuc = data
    )
  }
  timkiem():void{
    this.tintucService.timkiemht(this.value).subscribe(
      data=>this.tintuc=data
    )
  }
}
