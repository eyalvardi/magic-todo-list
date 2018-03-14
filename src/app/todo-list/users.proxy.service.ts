import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class UsersProxyService {

    constructor(private http:HttpClient) {
    }

    load(num:number){
        return this.http.get(`https://randomuser.me/api/?results=${num}`)
            .pipe(
                map(resp=>resp['results'])
            ).toPromise()
    }

}
