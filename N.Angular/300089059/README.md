
 ngModel est au coeur des "Template-driven Forms

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
