import { HeroesComponent } from './../heroes/heroes.component';
import { HeroeComponent } from './../heroe/heroe.component';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from './../../services/heroes.service';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})

export class HeroeTarjetaComponent extends HeroesComponent implements OnInit  {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor( private heroesService: HeroesService, private router: Router) {
    super( heroesService, router);
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.index);
    this.router.navigate(['/heroes/heroe', this.index]);
  }
}
