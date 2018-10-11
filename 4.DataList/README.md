# Data List

* Recréer un environement Angular grâce au tutoriel Theme

https://github.com/CollegeBoreal/Tutoriels/tree/master/3.Angular/B.Theme

* Créer un service pour récupérer les données 

```
ng generate service
```


https://pokeapi.co/api/v2/pokemon?limit=15


* Representation des donnees en JSON

https://www.w3schools.com/js/js_json_intro.asp

* Utilisation de la platefrome reactive

http://reactivex.io/

```
import "rxjs/Rx";
```

```
  constructor(private http: Http) {

  }
```

```
  pokemonInit(){
    let pokemons: Array<any> = [];

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .map( tout => tout.json() )
    .flatMap( tableau => tableau.results )
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
```

Devoir: Recuperer les informations (Pokemon) grace a la librairie rxjs/Rx et l'afficher dans un composant

