## 🔎TEMPLATE ET FORMS

https://angular.io/guide/displaying-data


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
Exemple
ng g component 

## Interpolation c est quoi exactement ? {{ }} for interpolation.
C'est un mécanisme qui va, analyser les templates pour retrouver vos {{interpolations}}, afin de placer des changement sur les propriétés de votre component qui sont liées par leur noms...

En gros elle Affiche des donner dans le template qui eux meme(les donnees) sont afficher dans la classe des composent.
En utilisant angular elle va afficher une proprieter de title par INTERPOLATION

Dans le fichier template app.compnent.html ex(<h1> {{ title}} </h1>)

L'interpolation est une fonctionnalité tres utile pour afficher une donnée et la synchroniser en permanence avec le modèle.
Comment sa marche? En mettant les crocher double autour d une expression( c a dire une proprieter de composant ou encore des equation maths) TEMPLATE.

Le text entre les accolade est souvent le nom du proprieter de composant.Angular remplace ce nom par la valeur string de la proprieter de composant qui correpond.

## Template-expressions : src/app/app.component.html
<h3>
  {{title}}
  <img src="{{heroImageUrl}}" style="height:30px">
</h3>

le texte entre les accolades est une expression de modèle que Angular évalue et ensuite convertit en chaîne.
Une expression de modèle produit une valeur. Angular exécute l'expression et l'assigne à une propriété d'une cible de liaison. la cible peut être un élément HTML, un composant ou une directive.

Les accolades d'interpolation entre {{1 + 1}} entourent l'expression de modèle 1 + 1. Dans la section de liaison de propriété ci-dessous, une expression de modèle apparaît entre guillemets à la droite du symbole =, comme dans [propriété] = "expression".

A template expression ne devrait changer aucun etat application  autre que la valeur de la cible 

## template-statements :
Une déclaration de modèle répond à un événement déclenché par une cible de liaison, telle qu'un élément, un composant ou une directive. Vous verrez des instructions de modèle dans la section de liaison d'événement, apparaissant entre guillemets à la droite du symbole =, comme dans (événement) = "instruction".

src/app/app.component.html
content_copy<button (click)="deleteHero()">Delete hero</button>

## Binding-targets 
La cible d'une liaison de données est quelque chose dans le DOM. Selon le type de liaison, la cible peut être une propriété (élément | composant | directive), un événement (élément | composant | directive) ou (rarement) un nom d'attribut.

Une propriété d'élément entre crochets identifie la propriété cible. La propriété target dans le code suivant est la propriété src de l'élément image. src/app/app.component.html
      
<img [src]="heroImageUrl">

## Class binding
Liaison de classe Vous pouvez ajouter et supprimer des noms de classe CSS de l'attribut de classe d'un élément avec une liaison de classe. 

La syntaxe de liaison de classe ressemble à la liaison de propriété. Au lieu d’une propriété d’élément entre crochets, commencez par le préfixe de la classe, suivi éventuellement d’un point (.)
Et du nom d’une classe CSS: [class.class-name]. L exemples suivants montrent comment ajouter et supprimer la classe "spéciale" de l'application avec des liaisons de classe.

Voici comment définir l'attribut sans liaison:
src / app / app.component.html <! - paramètre d'attribut de classe standard -> <div class = "bad curly special">





## EVENT BINDING
Les directives de liaison(binding directive) que vous avez rencontrées jusqu'ici transfèrent les données dans un sens: d'un composant à un élément.

Les utilisateurs ne se contentent pas de regarder l'écran. Ils entrent du texte dans les zones de saisie. Ils choisissent des éléments dans les listes. Ils cliquent sur des boutons. De telles actions de l'utilisateur peuvent entraîner un flux de données dans le sens opposé: d'un élément à un composant.

Le seul moyen de connaître l'action d'un utilisateur est d'écouter certains événements tels que les frappes au clavier, les mouvements de la souris, les clics et les contacts. Vous déclarez votre intérêt pour les actions de l'utilisateur via la liaison d'événement angulaire.

La syntaxe de liaison d'événement comprend un nom d'événement cible entre parenthèses à gauche d'un signe égal et une instruction de modèle entre guillemets à droite. La liaison d'événement suivante écoute les événements de clic du bouton, appelant la méthode onSave () du composant à chaque clic: 
src/app/app.component.html
      
<button (click)="onSave()">Save</button>


## Built-in-directives: * for structural directives.

La directive ngIf(condition) est utilisée lorsque vous souhaitez afficher ou masquer un élément en fonction d'une condition. La condition est déterminée par le résultat de l'expression que vous passez dans la directive.
A savoir :*Ngif= n oublier pas l Asterix devant le ngif

NgFOR(boucle) :C est une directive structurelle ngFor permet de boucler sur un array et d'injecter les éléments dans le DOM.    
src/app/app.component.html
<div *ngFor="let hero of heroes">{{hero.name}}</div>










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

*lien https://angular.io/guide/reactive-forms*

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
La classe FormControl est l'élément de base pour l'utilisation de formes réactives. Pour enregistrer un seul contrôle de formulaire, importez la classe FormControl dans votre composant et créez une nouvelle instance du contrôle de formulaire à enregistrer comme propriété de classe.

src/app/name-editor/name-editor.component.ts
content_copy
```import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```
Utilisez le constructeur de FormControl pour définir sa valeur initiale, qui dans ce cas est une chaîne vide. En créant ces contrôles dans votre classe de composants, vous obtenez un accès immédiat pour écouter, mettre à jour et valider l'état de la saisie du formulaire.
## Etape 3 : Enregistrer le contrôle dans le template
Après avoir créé le contrôle dans la classe de composants, vous devez l'associer à un élément de contrôle de formulaire dans le modèle. Mettez à jour le modèle avec le contrôle de formulaire à l'aide de la liaison formControl fournie par FormControlDirective incluse dans ReactiveFormsModule. 

src/app/name-editor/name-editor/name-editor. component. html
```<label>
  Name:
  <input type="text" [formControl]="name">
</label>
```
## Affichage du composant
Le contrôle de formulaire affecté au nom est affiché lorsque le composant est ajouté à un modèle. 

src/app/app/app. component. html (éditeur de nom)
```<app-name-editor></app-name-editor>```
## Gestion des valeurs de contrôle
Les formulaires réactifs vous donnent accès à l'état et à la valeur du contrôle de formulaire à un moment donné. Vous pouvez manipuler l'état et la valeur actuels via la classe de composants ou le modèle de composant. Les exemples suivants affichent la valeur de l'instance de contrôle de formulaire et la modifient.
## Affichage d'une valeur de contrôle de formulaire
Vous pouvez afficher la valeur de ces façons : 

Grâce à valueChanges observable où vous pouvez écouter :
* les changements de la valeur du formulaire dans le modèle en utilisant AsyncPipe ou dans la classe de composants en utilisant la méthode subscribe(). 
* Avec la propriété value. qui vous donne un instantané de la valeur courante.
L'exemple suivant vous montre comment afficher la valeur actuelle à l'aide de l'interpolation dans le modèle.

```src/app/name-editor/name-editor.component.html (control value)
content_copy
<p>
  Value: {{ name.value }}
</p>
```
## Remplacement d'une valeur de contrôle de formulaire

src/app/name-editor/name-editor.component.ts (update value)
content_copy
```updateName() {
  this.name.setValue('Nancy');
}
```
src/app/name-editor/name-editor.component.html (update value)
content_copy
```<p>
  <button (click)="updateName()">Update Name</button>
</p>
```
Le modèle de formulaire est la source de vérité pour le contrôle, donc lorsque vous cliquez sur le bouton, la valeur de l'entrée est modifiée dans la classe de composants, remplaçant sa valeur actuelle.
## 👓👓Grouping form controls
Tout comme une instance de contrôle de formulaire vous donne le contrôle sur un champ de saisie unique, une instance de groupe de formulaires suit l'état de formulaire d'un groupe d'instances de contrôle de formulaire (par exemple, un formulaire). Chaque contrôle d'une instance de groupe de formulaires est suivi par son nom lors de la création du groupe de formulaires. L'exemple suivant montre comment gérer plusieurs instances de contrôle de formulaires dans un même groupe.
Générez un composant ProfileEditor et importez les classes FormGroup et FormControl depuis le package @angular/forms.


```ng generate component ProfileEditor```

* src/app/profile-editor/profile-editor.component.ts (imports)
content_copy

```import { FormGroup, FormControl } from '@angular/forms';```


## 👓Step 1: Creating a FormGroup instance

Créez une propriété dans la classe de composants nommée profileForm et définissez la propriété à une nouvelle instance de groupe de formulaires. Pour initialiser le groupe de formulaires, fournissez au constructeur un objet de clés nommées mappées à leur contrôle. 

Pour le formulaire de profil, ajoutez deux instances de contrôle de formulaire avec les noms prénom et nom.

* src/app/profile-editor/profile-editor.component.ts (form group)
content_copy

```import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
```

Les contrôles de formulaire individuels sont maintenant regroupés au sein d'un groupe. Une instance de FormGroup fournit sa valeur de modèle sous la forme d'un objet réduit par rapport aux valeurs de chaque contrôle du groupe. Une instance de groupe de formulaires a les mêmes propriétés (telles que valeur et intact) et méthodes (telles que setValue()) qu'une instance de contrôle de formulaire.

## 👓Step 2: Associating the FormGroup model and view

Un groupe de formulaires suit l'état et les modifications de chacun de ses contrôles, donc si l'un des contrôles change, le contrôle parent émet également un nouveau changement d'état ou de valeur. Le modèle du groupe est maintenu par ses membres. Après avoir défini le modèle, vous devez mettre à jour le modèle pour refléter le modèle dans la vue.

* src/app/profile-editor/profile-editor.component.html (template form group)
content_copy

```<form [formGroup]="profileForm">
  
  <label>
    First Name:
    <input type="text" formControlName="firstName">
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>
 
</form>
```

Notez que, tout comme un groupe de formulaires contient un groupe de contrôles, le formulaire profil FormGroup est lié à l'élément de formulaire avec la directive FormGroup, créant une couche de communication entre le modèle et le formulaire contenant les entrées. L'entrée formControlName fournie par la directive FormControlName lie chaque entrée individuelle au contrôle de formulaire défini dans FormGroup. Les contrôles de formulaire communiquent avec leurs éléments respectifs. Ils communiquent également les modifications apportées à l'instance de groupe de formulaires, qui fournit la source de vérité pour la valeur du modèle.

## 👓Saving form data
Ajoutez un écouteur d'événement ngSubmit à la balise formulaire avec la méthode de rappel onSubmit().

* src/app/profile-editor/profile-editor.component.html (submit event)
content_copy

```<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">```

La méthode onSubmit() du composant ProfileEditor capture la valeur actuelle de profileForm. Utilisez EventEmitter pour garder le formulaire encapsulé et pour fournir la valeur du formulaire en dehors du composant. L'exemple suivant utilise console. warn pour enregistrer un message sur la console du navigateur.

* src/app/profile-editor/profile-editor.component.ts (submit method)
content_copy

```onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
```

L'événement submit est émis par la balise form en utilisant l'événement DOM natif. Vous déclenchez l'événement en cliquant sur un bouton de type submit. Cela permet à l'utilisateur d'appuyer sur la touche Entrée pour soumettre le formulaire rempli. 

Utilisez un élément de bouton pour ajouter un bouton au bas du formulaire afin de déclencher la soumission du formulaire.

* src/app/profile-editor/profile-editor.component.html (submit button)
content_copy

```<button type="submit" [disabled]="!profileForm.valid">Submit</button>```

## 👓Displaying the component
Pour afficher le composant ProfileEditor qui contient le formulaire, ajoutez-le à un modèle de composant.

* src/app/app.component.html (profile editor)
content_copy

```<app-profile-editor></app-profile-editor>```

ProfileEditor vous permet de gérer les instances de contrôle de formulaire pour les contrôles prénom et nom dans l'instance du groupe de formulaires.
![Alt.tag](https://angular.io/generated/images/guide/reactive-forms/profile-editor-1.png0

### ♦Creating nested form groups

Lors de la construction de formulaires complexes, il est plus facile de gérer les différents domaines d'information dans des sections plus petites, et certains groupes d'information tombent naturellement dans le même groupe. L'utilisation d'une instance de groupe de formulaires imbriqués vous permet de diviser les grands groupes de formulaires en groupes plus petits et plus faciles à gérer.

## Step 1: Creating a nested group
Une adresse est un bon exemple d'information qui peut être regroupée. Les groupes de formulaires peuvent accepter à la fois le contrôle de formulaire et les instances de groupe de formulaires comme enfants. La composition de modèles de formulaires complexes est ainsi plus facile à gérer et à regrouper de manière logique. Pour créer un groupe imbriqué dans profileForm, ajoutez un élément d'adresse imbriqué à l'instance du groupe de formulaires.

* src/app/profile-editor/profile-editor.component.ts (nested form group)
content_copy
```
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}
```
## Step 2: Grouping the nested form in the template
Ajoutez le groupe de formulaires d'adresses contenant les champs prénom et nom dans le modèle ProfileEditor.

* src/app/profile-editor/profile-editor.component.html (template nested form group)
content_copy
```
<div formGroupName="address">
  <h3>Address</h3>

  <label>
    Street:
    <input type="text" formControlName="street">
  </label>

  <label>
    City:
    <input type="text" formControlName="city">
  </label>
  
  <label>
    State:
    <input type="text" formControlName="state">
  </label>

  <label>
    Zip Code:
    <input type="text" formControlName="zip">
  </label>
</div>
```
![Alt_tag](photo.png)

## Partial model updates

* Patching the model value

Dans ProfileEditorComponent, utilisez la méthode updateProfile avec l'exemple ci-dessous pour mettre à jour le prénom et l'adresse de l'utilisateur.

* src/app/profile-editor/profile-editor.component.ts (patch value)
content_copy
```
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
Simulate an update by adding a button to the template to update the user profile on demand.

src/app/profile-editor/profile-editor.component.html (update value)
content_copy
<p>
  <button (click)="updateProfile()">Update Profile</button>
</p>
```

### 🔎Generating form controls with FormBuilder
Le service FormBuilder fournit des méthodes pratiques pour générer des contrôles. 

## Step 1: Importing the FormBuilder class
Import the FormBuilder class from the @angular/forms package.

* src/app/profile-editor/profile-editor.component.ts (import)

content_copy

```import { FormBuilder } from '@angular/forms';```

## Step 2: Injecting the FormBuilder service
The FormBuilder service is an injectable provider that is provided with the reactive forms module. Inject this dependency by adding it to the component constructor.

* src/app/profile-editor/profile-editor.component.ts (constructor)
content_copy

```constructor(private fb: FormBuilder) { }```

## Step 3: Generating form controls
Utilisez la méthode de groupe pour créer les champs profileForm.

* src/app/profile-editor/profile-editor.component.ts (form builder)
content_copy
```
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
 
  constructor(private fb: FormBuilder) { }
}

```
Compare using the form builder to creating the instances manually.

* src/app/profile-editor/profile-editor.component.ts (instances)
src/app/profile-editor/profile-editor.component.ts (form builder)
content_copy
```
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});
```

### 🔎Simple form validation

## Step 1: Importing a validator function

Importer la classe Validators depuis le paquetage @angular/forms.

* src/app/profile-editor/profile-editor.component.ts (import)
content_copy

```import { Validators } from '@angular/forms';```

## Step 2: Making a field required
Dans le composant ProfileEditor, ajoutez la méthode statique Validators. required comme deuxième élément du tableau pour le champ firstName.
* src/app/profile-editor/profile-editor.component.ts (required validator)
content_copy

``` profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
});

```
HTML5 possède un ensemble d'attributs intégrés que vous pouvez utiliser pour la validation native, y compris la longueur minimale, minimale et maximale..Vous pouvez profiter de ces attributs facultatifs sur vos éléments de saisie de formulaire. Ajoutez l'attribut requis à l'élément d'entrée firstName.

* src/app/profile-editor/profile-editor.component.html (required attribute)
content_copy

```<input type="text" formControlName="firstName" required>```

## Attention!
Utilisez ces attributs de validation HTML5 en combinaison avec les validateurs intégrés fournis par les formulaires réactifs d'Angular. Leur combinaison permet d'éviter les erreurs lorsque l'expression est modifiée après que le modèle a été vérifié.

## Displaying form status

Display the current status of profileForm using interpolation.
```
<p>
  Form Status: {{ profileForm.status }}
 
</p>
```
