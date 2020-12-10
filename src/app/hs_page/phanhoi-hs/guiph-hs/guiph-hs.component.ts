import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-guiph-hs',
  templateUrl: './guiph-hs.component.html',
  styleUrls: ['./guiph-hs.component.scss']
})
export class GuiphHsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    width:"66rem",
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Nội dụng...',
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
}
