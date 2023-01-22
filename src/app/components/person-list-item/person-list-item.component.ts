import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'compare-scrolling-person-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="name">{{ person?.firstName }} {{ person?.lastName }}</span>
    ({{ person?.age }}):
    <span class="description">{{ person?.description }}</span>
  `,
  styleUrls: ['./person-list-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonListItemComponent {
  @Input() person?: Person;
}
