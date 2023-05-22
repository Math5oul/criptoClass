import { Component } from '@angular/core';
import { data } from '../../data/tabsData'
import { ReferenceComponent } from '../tabs/reference/reference.component';
@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent {
  activeTab = 0;
  modalActive = false;

  tabs = data;

  ngOnInit(): void {
    this.tabs.push({ title: "Referências", component: ReferenceComponent, explain: '', ref: '' })

  }

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
