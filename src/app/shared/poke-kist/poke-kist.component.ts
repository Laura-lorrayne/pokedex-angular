import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-kist',
  templateUrl: './poke-kist.component.html',
  styleUrls: ['./poke-kist.component.css']
})
export class PokeKistComponent implements OnInit {

  private setAllPokemons:any;
  public getAllPokemons:any;
  public apiError: boolean = false;

 
  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe (
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      
      },
      error => {
        this.apiError = true;
      }
    )
  }
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.apiError = filter.length == 0 ? true : false;
    this.getAllPokemons = filter;
  }

}
