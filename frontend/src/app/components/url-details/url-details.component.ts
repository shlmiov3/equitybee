import { MainFacade } from './../facade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';


@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.scss']
})
export class UrlDetailsComponent implements OnInit {

  item = {} as any
  fields = ['logo', 'name', 'domain', 'description', 'location']
  metrics = ['raised', 'marketCap', 'annualRevenue', 'employees']

  constructor(
    private facade: MainFacade,   
    private route: ActivatedRoute,
    private router: Router
    ) { }

  get keys(){
    return (this.item? Object.keys(this.item) : []).filter(key => this.fields.includes(key))
  }

  get metricsKeys(){
    const k = (this.item['metrics']? Object.keys(this.item['metrics']) : []).filter(key => this.metrics.includes(key))
    return k
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: any) => {
        this.item =  this.facade.getUrlDetails(params['url_name'])
        console.log(this.item)
      }
    )
  }
}
