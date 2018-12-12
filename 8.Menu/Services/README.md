
# Services
Les composants ne doivent pas extraire ou enregistrer des données directement et ils ne doivent certainement pas sciemment présenter de fausses données Ils doivent se concentrer sur la présentation des données et déléguer l’accès à un service.
## Créer le Service
````
$ ng generate service hero

La commande génère une classe HeroService squelette dans src / app / hero.service.ts. 
La classe HeroService devrait ressembler à l'exemple suivant.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

}

````
## Enregistrer le Service

Import the service in the component.ts
Import{ServiceName} from ‘./name.service’;

Ajouter le Service dans
````
Providers[]
````

## Declarer le Service dans le composant.ts
````
constructor(private heroService: HeroService) { }
````

Créer la fonction pour appeler les heros a partir du service
````
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
````
Angular fait appel ngOnInit à un moment approprié après la construction d'une instance HeroesComponent.
````
ngOnInit() {
  this.getHeroes();
}
````
