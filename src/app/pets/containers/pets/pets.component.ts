import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { map } from 'rxjs/operators';
import { Result } from '../../models/result';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  result$: Observable<Result>;

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    this.result$ = this.petService
      .getPets()
      .pipe(map((persons) => this.getResult(persons)));
  }

  getResult(persons: Person[]): Result {
    return persons.reduce<Result>(function (r, a) {
      r[a.gender] = r[a.gender] || [];
      if (a.pets) {
        r[a.gender].push(
          ...a.pets.filter((x) => x.type == 'Cat').map((y) => y.name)
        );
      }
      return r;
    }, {});
  }
}
