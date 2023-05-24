import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

   apikey ='https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }


  getPokemon(){
    return this.http.get(this.apikey);
  }

  detailsPokemon(id:number){
    return this.http.get(`${this.apikey}/${id}/`);
  }
}
