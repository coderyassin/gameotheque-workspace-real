import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {PeopleService} from '../services/people.service';
import {Observable} from 'rxjs';
import {Persons} from '../models';

@Component({
  selector: 'dtbc-select-people',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './select-people.component.html',
  styleUrl: './select-people.component.css'
})
export class SelectPeopleComponent {
  private readonly peopleService  = inject(PeopleService);
  persons$: Observable<Persons> = this.peopleService.getAll();
}
