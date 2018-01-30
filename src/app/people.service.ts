import { Injectable } from '@angular/core';
import { Person } from './person';

const PEOPLE : Person[] = [
      {id: 1, name: 'Kobayashi Taihei', height: 177, weight: 65},
      {id: 2, name: 'Vu Xuan Dung', height: 165, weight: 62},
      {id: 3, name: 'Tran Ngoc Thang', height: 173, weight: 68},
    ];

@Injectable()
export class PeopleService {

  getAll() : Person[] {
    return PEOPLE;
  }

  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  }
}
