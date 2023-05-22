import { Component } from '@angular/core';
import { data } from '../../data/tabsData'
@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent {
  activeTab = 0;
  modalActive = false;

  tabs = data;

  setActiveTab(index: number): void {
    this.activeTab = index;
  }

  toggleModal(): void {
    this.modalActive = !this.modalActive;
  }

  closeModal(): void {
    this.modalActive = false;
  }
}
