import { Injectable } from "@angular/core";
import { MainService } from "./service";
import { MainState } from "./state";

@Injectable()
export class MainFacade {
    
    urlsData$ = this.state.urlsData$

    constructor(private service: MainService, private state: MainState){}
    
    getData(){
        return this.service.getData()
    }

    getUrlData(url: string){
        return this.service.getUrlData(url).subscribe(
            (urlData: any) => {
                this.state.updateUrls(urlData)
            }
        )
    }
    getUrlDetails(name: string){
        return this.state.getUrlDetails(name)
    }
}