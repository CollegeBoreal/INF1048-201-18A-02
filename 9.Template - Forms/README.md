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

```ng g component site\accueil
ng g component site\galerie
ng g component site\contact ```

##  Mise en place des routes

1 –Indiquer au module principal que nous utiliserons des routes
Lorsque le module Root charge les sous modules il prend en compte les routes indiquees. 


Reactive Forms (or Model Driven)

 formulaire(Forms)
1 – Creer un nouveau composant : ng g component src\noms\form
• Ce composant est un formulaire pour rechercher des noms
• Angular CLI a ajouté ce composant au module noms.module.ts
2 – Ajouter le formulaire au template noms.component.html
