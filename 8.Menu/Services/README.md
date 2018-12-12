
# Pipes
Un pipe prend des données en entrée et les transforme en une sortie sous une forme souhaitée.
Les pipes ne changent que sur la vue, cela ne change pas la propriété de la classe.
## Examples de Pipes
````
<h2>{{name | lowrcase}}</h2>
<h2>{{name | uppercase}}</h2>
<h2>{{message | titlecase}}</h2>
<h2>{{name | slice:3:5}}</h2>

<h2>{{3.678 | number:’1.2-3’}}</h2>
<h2>{{3.678 | number:’3.4-5’}}</h2>
<h2>{{3.678 | number:’3.1-2’}}</h2>

<h2>{{0.25 | percent}}</h2>

<h2>{{0.25 | currency }}</h2>
<h2>{{0.25 | currency: ’Euro’ }}</h2>
<h2>{{0.25 | currency: ‘Euro’: ‘code’ }}</h2>

<h2>{{date}}</h2>

<h2>{{date | date :’short’}}</h2>
<h2>{{date | date :’shortDate’}}</h2>
<h2>{{date | date :’shortTime’}}</h2>

<h2>{{person | json}}</h2>

````
# Life Cycle Hooks
Chaque composant a un cycle de vie géré par Angular.
Angular le crée, le restitue, crée et restitue ses enfants, le vérifie lorsque ses propriétés liées aux données changent et le détruit avant de le retirer du DOM.

````
ngOnChanges()   on every change
ngOnInit()       once per component
ngDoCheck()     if angular suspect a change
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked()
ngOnDestroy()   to avoid memory leaks
````
# Services
Les composants ne doivent pas extraire ou enregistrer des données directement. Ils doivent se concentrer sur la présentation des données et déléguer l’accès à un service.
Les services sont un excellent moyen de partager des informations entre des classes qui ne se connaissent pas.
## Créer le Service
À l'aide de la CLI angulaire, créez un service appelé hero.
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
