import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  template: `
    <p>
      <nb-layout>
        <nb-layout-header fixed>Company Name</nb-layout-header>

        <!--<nb-sidebar>Sidebar Content</nb-sidebar>&lt;!&ndash;&ndash;&gt;-->

        <nb-layout-column>Page Content</nb-layout-column>
      </nb-layout>
    </p>
  `,
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
