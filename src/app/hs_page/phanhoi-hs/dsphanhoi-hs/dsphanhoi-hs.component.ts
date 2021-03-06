import { Component, OnInit } from '@angular/core';
interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-dsphanhoi-hs',
  templateUrl: './dsphanhoi-hs.component.html',
  styleUrls: ['./dsphanhoi-hs.component.scss']
})
export class DsphanhoiHsComponent implements OnInit {
  isSpinning = false;
  constructor() { }

  ngOnInit(): void {
  }
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
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
