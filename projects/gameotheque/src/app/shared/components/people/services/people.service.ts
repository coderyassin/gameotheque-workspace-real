import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Persons} from '../models';
import {PeopleApiReturn} from '../models/PeopleResponse';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly httpClient = inject(HttpClient);

  getAll(pageIndex: number = 1): Observable<Persons> {
    return this.httpClient.get<PeopleApiReturn>(environment.apis.people).pipe(
      map(returnApi => {
        return returnApi.results.map(item => ({ name: `${item.gender}. ${item.name} ` }))
      })
    );
  }
}
