import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

// tslint:disable-next-line: indent
	heroe: any = {};

// tslint:disable-next-line: variable-name
constructor( private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService, private router: Router) {
// tslint:disable: indent
	this._activatedRoute.params.subscribe( params => {
	this.heroe = _heroeService.getHeroe(params.id);
    } );
  }
  volver() {
    this.router.navigate(['heroes']);
  }


}
