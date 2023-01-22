import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonListItemComponent } from '../person-list-item/person-list-item.component';

@Component({
  selector: 'compare-scrolling-standard-list-box',
  standalone: true,
  imports: [CommonModule, PersonListItemComponent],
  template: `
    <strong>Standard List Item:</strong>
    <ul>
      <li *ngFor="let person of people">
        <compare-scrolling-person-list-item [person]="person" />
      </li>
    </ul>
  `,
  styleUrls: ['./standard-list-box.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardListBoxComponent {
  @Input() people?: Person[];
}
