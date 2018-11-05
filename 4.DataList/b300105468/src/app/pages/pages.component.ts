@Component({
  selector: 'app-pages',
  template: `
    <app-layout-one-column>
      <router-outlet></router-outlet>
    </app-layout-one-column>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-pages',
  template: `
    <app-layout-one-column>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-layout-one-column>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  menu: NbMenuItem[];

  constructor() { }

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}
