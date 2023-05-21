import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent {
  activeTab: number = 1;
  modalActive: boolean = false;

  setActiveTab(n: number) {
    this.activeTab = n;
  }


  toggleModal() {
    this.modalActive = !this.modalActive;

  }
}
