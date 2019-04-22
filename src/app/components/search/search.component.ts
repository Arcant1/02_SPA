import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private heroSer: HeroesService) {
  }
  text: string;
  heroes: Heroe[] = [];
  
  ngOnInit()
  {
    this.activatedRoute.params.subscribe( params => {
      this.text = params.termino;
      this.heroes = this.heroSer.buscarHeroes(this.text);
    });
  }
}
