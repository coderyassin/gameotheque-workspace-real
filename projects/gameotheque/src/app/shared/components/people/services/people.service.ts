import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persons} from '../models';
import {environment} from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly httpClient = inject(HttpClient);

  getAll(pageIndex: number = 1): Observable<Persons> {
    return this.httpClient.get<Persons>(environment.apis.people);
  }
}
