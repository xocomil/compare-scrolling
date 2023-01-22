import { ScrollingModule } from '@angular/cdk/scrolling';
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
  selector: 'compare-scrolling-virtual-scroller',
  standalone: true,
  imports: [CommonModule, PersonListItemComponent, ScrollingModule],
  template: `
    <strong>Virtual Scroll:</strong>
    <cdk-virtual-scroll-viewport
      itemSize="25"
      class="viewport"
      maxBufferPx="500"
      minBufferPx="250"
    >
      <ul>
        <li *cdkVirtualFor="let person of people">
          <compare-scrolling-person-list-item [person]="person" />
        </li>
      </ul>
    </cdk-virtual-scroll-viewport>
  `,
  styleUrls: ['./virtual-scroller.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollerComponent {
  @Input() people?: Person[];
}
