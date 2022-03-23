import { Injectable } from "@angular/core";
import { addDoc, Firestore, collection, getDocs } from "@angular/fire/firestore";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MainService {
    
    private db = collection(this.firestore, 'users')
    private endpoint = 'http://127.0.0.1:5000/urls/';

    constructor(private firestore: Firestore, private http: HttpClient){}

    getData(){
        getDocs(this.db).then((response) => {
            console.log(response.docs.map((item) => {
                return {...item.data(), id: item.id}
            }))
        })
    }

    getUrlData(url: string){
        return this.http.get(this.endpoint + url)
    }


}