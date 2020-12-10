import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { Tintuc } from 'src/app/models/tintuc';
import { TintucService } from 'src/app/service/tintuc.service';
@Component({
  selector: 'app-chinhsuatt',
  templateUrl: './chinhsuatt.component.html',
  styleUrls: ['./chinhsuatt.component.scss']
})
export class ChinhsuattComponent implements OnInit {


  tintuc: Tintuc = null;
  constructor(private tintucService: TintucService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    this.tintucService.gettintuc(id).subscribe(
      data => {
        this.tintuc = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );


  }
  name = 'Angular 6';
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    width: "120rem",
    height: '35rem',
    minHeight: '10rem',
    placeholder: 'Nội dung...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  update(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.tintucService.update(id, this.tintuc).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        if(this.tintuc.loaitintuc="true"){
          this.router.navigate(['/quan-ly-hoc-tap']);
        }else{
          this.router.navigate(['/quan-ly-hoat-dong']);
        }
       
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}
