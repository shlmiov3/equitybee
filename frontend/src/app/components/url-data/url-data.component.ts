import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-data',
  templateUrl: './url-data.component.html',
  styleUrls: ['./url-data.component.scss']
})
export class UrlDataComponent implements OnInit {

  @Input() urlData = {} as any

  constructor() { }

  ngOnInit(): void {
  }

}
