import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explain-modal',
  templateUrl: './explain-modal.component.html',
  styleUrls: ['./explain-modal.component.scss']
})
export class ExplainModalComponent {

  @Input()
  tabPosition!: number;

}
