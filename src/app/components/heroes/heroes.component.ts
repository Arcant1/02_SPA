import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService, private router: Router ) {

   }

   public heroes: Heroe [] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroes/heroe', i]);
  }

}
