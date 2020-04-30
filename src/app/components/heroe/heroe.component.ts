import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    activedRoute.params.subscribe((params) => {

      this.heroe = _heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {
  }




}
