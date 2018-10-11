import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {}


function constructor(private: any) {
}

constructor(private http: Http) {

}

function pokemonInit() {

}

pokemonInit()
    {
      const pokemons: Array<any> = [];

      this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .map(tout => tout.json())
        .flatMap(tableau => tableau.results)
        .subscribe(
          donnee => {
            pokemons.push(donnee)
          },
          erreur => {
            console.error(erreur)
          }
        );

      return pokemons;
    }
  }
}
