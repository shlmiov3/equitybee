import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MainState {
    
    private urlsData = new BehaviorSubject([] as any)
    urlsData$ = this.urlsData.asObservable()

    constructor(){}

    updateUrls(urlData: any){
        let currentUrls = this.urlsData.value
        const item = currentUrls.find((data: any) => data.name == urlData.name)
        if(!!!item){
            currentUrls.push(urlData)
        }
        this.urlsData.next(currentUrls)
    }

    getUrlDetails(name: string){
        const item = this.urlsData.value.find((data: any) => data.name == name)
        return item
    }
}