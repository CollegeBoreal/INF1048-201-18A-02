## 🔎TEMPLATE ET FORMS

## CREATION D'UN PROJET(TEMPLATE ET FORMS)

## 1-taper dans la console git bash: 

```ng new avec votre numero etudiant```

Cela va créer un nouveau projet Angular CLI

## 2-Toujours dans bash:
``` ng serve ```

## 3-Aller dans chrome ou n importe quelle navigateur et faite  
http://localhost:4200

### CREATION DE MODULE ET COMPOSANT DES PAGES

Créer un répertoire dans src/app
```ng g module ```

## Ajouter le modules dans le module principal qui se trouve dans le répertoire 
app le nommer app.module.ts



## Ajouter les composants qui serviront à afficher chacune des pages

ng g component site\accueil
ng g component site\galerie
ng g component site\contact 

##  Mise en place des routes

1 –Indiquer au module principal que nous utiliserons des routes
Lorsque le module Root charge les sous modules il prend en compte les routes indiquees. 


Reactive Forms (or Model Driven)


 formulaire(Forms)
1 – Creer un nouveau composant : ng g component src\noms\form
• Ce composant est un formulaire pour rechercher des noms
• Angular CLI a ajouté ce composant au module noms.module.ts
2 – Ajouter le formulaire au template noms.component.html

## 🔎FORMS
## 📍Introduction aux formes angulaires 
La gestion de la saisie par l'utilisateur à l'aide de formulaires est la pierre angulaire de nombreuses applications courantes. Les applications utilisent des formulaires pour permettre aux utilisateurs de se connecter, de mettre à jour un profil, d'entrer des informations sensibles et d'effectuer de nombreuses autres tâches de saisie de données. 

Angular propose deux approches différentes pour traiter les données saisies par l'utilisateur à l'aide de formulaires : réactive et pilotée par des modèles. Les deux saisissent les événements d'entrée de l'utilisateur à partir de la vue, valident l'entrée de l'utilisateur, créent un modèle de formulaire et un modèle de données à mettre à jour, et fournissent un moyen de suivre les changements.
Reactive and template-driven forms pilotés par modèle traitent et gèrent les données de formulaire différemment. Chacun offre des avantages différents. 

En général :

* Les réactives forms sont plus robustes : elles sont plus évolutives, réutilisables et testables. Si les formulaires sont un élément clé de votre demande, ou si vous utilisez déjà des modèles réactifs pour construire votre demande, utilisez des formulaires réactifs.
* Les Template-driven forms sont utiles pour ajouter un formulaire simple à une application, tel qu'un formulaire d'inscription à une liste de diffusion. Ils sont faciles à ajouter à une application, mais ils n'évoluent pas aussi bien que les formulaires réactifs. Si vous avez des exigences et une logique de formulaire très élémentaires qui peuvent être gérées uniquement dans le modèle, utilisez des formulaires pilotés par modèle.

## 📍Reactive Forms
Les formulaires réactifs utilisent une approche explicite et immuable pour gérer l'état d'un formulaire à un moment donné. Chaque modification de l'état du formulaire renvoie un nouvel état, qui maintient l'intégrité du modèle entre les modifications. Les formulaires réactifs sont construits autour de flux observables, où les entrées et les valeurs des formulaires sont fournies sous forme de flux de valeurs d'entrée, accessibles de manière synchrone.
Les formulaires réactifs constituent également un moyen simple d'effectuer des tests, car vous avez l'assurance que vos données sont cohérentes et prévisibles lorsqu'elles vous sont demandées. Tous les consommateurs des flux ont accès pour manipuler ces données en toute sécurité.
## ✨Pour commencer
## Etape 1 : Enregistrement du module des formulaires réactifs
Pour utiliser des formulaires réactifs, importez ReactiveFormsModule depuis le package @angular/forms et ajoutez-le au tableau d'importation de votre NgModule.
src/app/app.module.ts (excerpt)
content_copy
```
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }
```
## Etape 2 : Génération et importation d'un nouveau contrôle de formulaire
Générez un composant pour le contrôle.
```ng generate component NameEditor```
