import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
