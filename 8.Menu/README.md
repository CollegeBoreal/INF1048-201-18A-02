# Introduction:

Comme vous savez Angular vous aide à créer des applications modernes pour le Web dans votre mobile ou votre Laptop. Donc en general on l'utilise pour developper les sites Web

=> Avant de commencer avec Anguler CLI on a besoin de :

Node.js (v8 ou 10) et npm package manager 

## Pourquoi on utilise Angular CLI ?

on l'utilise pour creer des projets, generer des applications et liberer le code.
et on l'installe avec cette commande:

```
$ npm install @angular/cli --global
```
Alors, il faut creer votre projet ou vous voulez developper votre App ou bien votre Web ce qu'il faut faire :

```
$ ng new OurApp --style=scss --routing=true && cd $_
```
La commande ng serve lance le serveur, surveille vos fichiers et reconstruit l'application

```
$ ng serve
```

ouvrez votre navigateur sur http: // localhost: 4200 /.

Votre application vous accueille avec un message:
![Alt.tag](angu.png)


Afin d'ajouter un nouveau composant, on utilise la commande suivante:
```
$ng generate component (le nom)
```

## Routing:

Le "routing" Angular permet de naviguer d'une vue à l'autre lorsque les utilisateurs effectuent des tâches. 
Il suffit de cliquez sur les liens de la page et le navigateur navigue vers une nouvelle page et puis sur les boutons Précédent / Suivant du navigateur et celui-ci navigue dans l'historique des pages que vous avez consultées.


# Route Guards:

Les "route guards" sont ajoutés à la configuration pour pouvoir gérer les utilisateurs naviguant sur les applications. La valeur de retour d'un "guard" contrôle le comportement de la route:

-Si la valeur est "true", le processus de navigation se poursuit.
-S'il renvoie "false", le processus de navigation s'arrête et l'utilisateur reste en place. 

La route supporte plusieurs interfaces de "guards":

```CanActivate``` nécessite une authentification.
Les applications limitent souvent l'accès à une zone de fonctionnalités en fonction de l'identité de l'utilisateur. Vous pouvez autoriser l'accès uniquement aux utilisateurs authentifiés ou aux utilisateurs dotés d'un rôle spécifique. Vous pouvez bloquer ou limiter l'accès jusqu'à l'activation du compte de l'utilisateur.

```CanActivateChild``` est similaire à la garde CanActivate. La principale différence est qu'il s'exécute avant l'activation de tout itinéraire "child". 

```CanDeactivate``` sert a faire une pause pour faire un sauvegarde de l'application. Il laisse l'utilisateur décider quoi faire. Si l'utilisateur annule, il restera donc sur place et autorisez d'autres modifications. Si l'utilisateur approuve, l'application peut enregistrer.

```Resolve``` pour récupérer les données de route avant l'activation de la route. Il différe le rendu du composant routé jusqu'à ce que toutes les données nécessaires aient été extraites.

```CanLoad``` permet de naviguer dans un module de fonctions chargé de manière asynchronisé. Le route est définit par la méthode CanLoad.

