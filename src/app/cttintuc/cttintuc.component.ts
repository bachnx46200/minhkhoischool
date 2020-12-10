import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tintuc } from '../models/tintuc';
import { TintucService } from '../service/tintuc.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cttintuc',
  templateUrl: './cttintuc.component.html',
  styleUrls: ['./cttintuc.component.scss']
})
export class CttintucComponent implements OnInit {
tintuc:Tintuc;
tthoctap: Tintuc;
tthoatdong:Tintuc;
cttintuc:Tintuc;
  constructor( private route: ActivatedRoute,
    private tintucService:TintucService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadhoctap();
    this.loadhoatdong();
    this.route.params.subscribe(param => {
      this.tintucService.gettintuc(param.id).subscribe(
        data=> this.tintuc=data
      )
    })

    const id = this.route.snapshot.params.id;
    this.tintucService.cttintuc(id).subscribe(
      data => {
        this.cttintuc = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );



  }
  volver(): void {
    this.router.navigate(['/']);
  }
  public loadhoctap() {
    this.tintucService.listhoctap().subscribe(
      data => this.tthoctap = data
    )
  }
  public loadhoatdong() {
    this.tintucService.listhoatdong().subscribe(
      data => this.tthoatdong = data
    )
  }


  
}
