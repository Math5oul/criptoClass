import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent {
  activeTab = 1;

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
}
