import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { addDays, formatDistance } from 'date-fns';
@Component({
  selector: 'app-traloi-hs',
  templateUrl: './traloi-hs.component.html',
  styleUrls: ['./traloi-hs.component.scss']
})
export class TraloiHsComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    }
  ];

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    width:"66rem",
    height: '12rem',
    minHeight: '5rem',
    placeholder: 'Trả lời...',
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
