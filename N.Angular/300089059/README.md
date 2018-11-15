
 

Un exemple de array json
````
{
"nom":"tartuf",
"age":50,
"chapo":[ "bleu", "vert", "orange" ]
}

````


ngModel est au coeur des "Template-driven Forms

````
@Component({
    templateUrl: './form.component.html'
})
export class FormComponent {
    bookTitle: string;
}

<form>
    <input
        name="title"
        [(ngModel)]="Title">
</form>
````
