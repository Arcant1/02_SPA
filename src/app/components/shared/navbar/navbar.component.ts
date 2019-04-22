import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroesService: HeroesService) { }
  ngOnInit() {

  }

  buscarHeroe(termino: string) {
    this.router.navigate(['/search', termino]);
  }

  mostrarBusqueda(termino: string) {
  }
}
