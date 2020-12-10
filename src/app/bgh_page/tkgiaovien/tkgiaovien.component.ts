import { Component, OnInit } from '@angular/core';
interface DataItem {
  name: string;
  age: number;
  address: boolean;
}
@Component({
  selector: 'app-tkgiaovien',
  templateUrl: './tkgiaovien.component.html',
  styleUrls: ['./tkgiaovien.component.scss']
})
export class TkgiaovienComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: true
    },
    {
      name: 'Jim Green',
      age: 42,
      address: false
    },
    {
      name: 'Joe Black',
      age: 32,
      address: false
    },
    {
      name: 'Jim Red',
      age: 32,
      address: false
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}
