import { Component } from '@angular/core';
import { StandardListBoxComponent } from './components/standard-list-box/standard-list-box.component';
import { VirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller.component';
import { createPerson } from './models/person.model';

@Component({
  selector: 'compare-scrolling-root',
  template: `<h1>Compare Scrolling</h1>
    <div class="list-container">
      <!--      <compare-scrolling-standard-list-box [people]="people" />-->
      <compare-scrolling-virtual-scroller [people]="people" />
    </div> `,
  styleUrls: ['./app.component.scss'],
  imports: [StandardListBoxComponent, VirtualScrollerComponent],
  standalone: true,
})
export class AppComponent {
  title = 'compare-scrolling';

  protected people = Array.from({ length: 10000 }, createPerson);
}
