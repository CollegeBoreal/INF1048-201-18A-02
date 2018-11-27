# Introduction:

Comme vous savez Angular vous aide à créer des applications modernes pour le Web dans votre mobile ou votre Laptop. Donc en general on l'utilise pour developper les sites Web

=> Avant de commencer avec Anguler CLI on a besoin de :

Node.js (v8 ou 10) et npm package manager 

## Pourquoi on utilise Angular CLI ?

on l'utilise pour creer des projets, generer des applications et liberer le code.
et on l'installe avec cette commande:

Alors, il faut creer votre projet ou vous voulez developper votre App ou bien votre Web ce qu'il faut faire :

```
$ ng new b300XXXXX --style=css --routing=true && cd $_
```
La commande ng serve lance le serveur, surveille vos fichiers et reconstruit l'application

Avant de lancer votre site vous devez etre dans ton projet qui est "b300XXXX"

```
$ cd b300....
$ ng serve
```

ouvrez votre navigateur sur http://localhost:4200/

Votre application vous accueille avec un message:
![Alt.tag](angu.png)


Notre menu d'aujourdhui c est Heroes :

pic

On Commence !

```
$ng generate component heroes/hero-list
$ng generate component heroes/hero-detail
```
Vous ouvres votre projet avec ``` webStorm``` et vous devez changer le code en suivant ces parties:

##### src/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Set the base href -->
  <base href="/">
  <title>Welcome to our App</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
<app-root></app-root>
</body>

</html>
```
Avant qu'on face avec le reste de code vous devez creer des fichiers ```ts``` :

###### src/app/service.message.ts

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
```
###### src/app/selective-preloading-strategy.ts

```
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path);

      // log the route path to the console
      console.log('Preloaded: ' + route.path);

      return load();
    } else {
      return of(null);
    }
  }
}

```
##### src/app/animation.ts

```
import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('heroes <=> hero', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

```
## Intégrez le routage à votre application:

Cela crée un fichier séparé nommé my-module-routing.module.ts pour stocker les itinéraires du NgModule. Le fichier comprend un objet Routes vide que vous pouvez remplir avec des routes vers différents composants et NgModules.

```
$ ng generate module my-module --routing
```
## Refactoriser la configuration de routage dans un module de routage:

```
$ ng generate module app-routing --module app --flat
```
Après ces étapes, les fichiers devrait ressembler à ceci.
##### src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

```

##### src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
## app.component.html ... nd son 
# Configuration de menu Heroes :

Créez un HeroesModule avec un routage dans le dossier heroes et enregistrez-le avec le racine AppModule. C'est là que vous allez mettre en place la gestion des héros.

```
$ ng generate module heroes/heroes --module app --flat --routing
```
Assurez-vous que les fichiers suivants sont les memes commes suivant :
## src/app/heroes/heroes.module.ts 

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule {}
```

## src/app/heroes/heroes-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
```
Avant de continuer la configuration des autres fichiers :

## src/app/heroes/hero.ts

```
export class Hero {
  id: number;
  name: string;
}
```

## src/app/heroes/hero.service.ts

```
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
```

## src/app/heroes/mock-heroes.ts

```
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 1, name: 'Brice' },
  { id: 2, name: 'Safaa' },
  { id: 3, name: 'Amelie' },
  { id: 4, name: 'Hamido' },
  { id: 5, name: 'Fabien' },
  { id: 6, name: 'Mostafa' }

];

```
Maintenant on doit changer les fichiers de` Heroes/hero-list `et ` Heroes/hero-detail `, danc il faut juste avoire exactement meme code suivant :

### 
