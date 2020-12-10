import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { Tintuc } from 'src/app/models/tintuc';
import { TintucService } from 'src/app/service/tintuc.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-themmoitt',
  templateUrl: './themmoitt.component.html',
  styleUrls: ['./themmoitt.component.scss']
})
export class ThemmoittComponent implements OnInit {

  loaitintuc:string;
  tieude:string;
  noidung:string;
  createdBy:string= this.tokenService.getUserName();

  constructor(   private tintucService: TintucService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService,) { }

  ngOnInit(): void {
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

  optionList = [
    { label: 'Hoạt Động', value: 'false',  },
    { label: 'Học Tập', value: 'true',  }
  ];
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);


  addnew():void{
  const tintuc = new Tintuc(this.tieude, this.noidung,this.createdBy,this.loaitintuc);
    this.tintucService.addnew(tintuc).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        if(this.loaitintuc="true"){
          this.router.navigate(['dao-tao/quan-ly-hoat-dong']);
        }else{
          this.router.navigate(['dao-tao/quan-ly-hoc-tap']);
        }
      
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/them-moi-tin-tuc']);
      }
    );
}


  
}
