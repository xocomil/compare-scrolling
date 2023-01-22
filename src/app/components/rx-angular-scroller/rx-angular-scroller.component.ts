import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ForModule } from '@rx-angular/template/for';
import { Person } from '../../models/person.model';
import { PersonListItemComponent } from '../person-list-item/person-list-item.component';

@Component({
  selector: 'compare-scrolling-rx-angular-scroller',
  standalone: true,
  imports: [CommonModule, PersonListItemComponent, ForModule],
  template: `
    <strong>Standard List Item:</strong>
    <ul>
      <li *rxFor="let person of people">
        <compare-scrolling-person-list-item [person]="person" />
      </li>
    </ul>
  `,
  styleUrls: ['./rx-angular-scroller.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxAngularScrollerComponent {
  @Input() people?: Person[];
}
