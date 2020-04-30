import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {

  heroesBuscados: any = {};
  termino: string;

  constructor(private _heroesService: HeroesService, private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      this.termino = params['nombre'];
      this.heroesBuscados = this._heroesService.searchHeroe(params['nombre']);
      console.log(this.heroesBuscados);
      
    })
  }

}
