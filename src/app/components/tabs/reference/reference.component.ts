import { Component } from '@angular/core';
import { data } from '../../../data/tabsData';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  tabs = data;
}
