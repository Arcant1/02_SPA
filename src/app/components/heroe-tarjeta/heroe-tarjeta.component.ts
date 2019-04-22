import { HeroesComponent } from './../heroes/heroes.component';
import { HeroeComponent } from './../heroe/heroe.component';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from './../../services/heroes.service';
import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent extends HeroesComponent implements OnInit  {
  @Input() heroe: any = {};
  constructor(  _heroesService: HeroesService,  router: Router) {
    super( _heroesService, router);
  }

  ngOnInit() {
  }

}
