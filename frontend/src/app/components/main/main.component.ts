import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { MainFacade } from '../facade';
import { FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  urlsData$ = this.facade.urlsData$ 
  inputUrl = new FormControl('')

  constructor(private facade: MainFacade) { }
  ngOnInit(): void {
    // this.facade.getData()
  }

  onGetInfoClick(){
    this.facade.getUrlData(this.inputUrl.value)
  }

}
