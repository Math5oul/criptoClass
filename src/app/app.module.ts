import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { CeasarCipherComponent } from './components/tabs/ceasear-cipher/ceasar-cipher.component';
import { FormsModule } from '@angular/forms';
import { VigenereCipherComponent } from './components/tabs/vigenere-cipher/vigenere-cipher.component';
import { Sha256CipherComponent } from './components/tabs/sha256-cipher/sha256-cipher.component';
import { ExplainModalComponent } from './components/explain-modal/explain-modal.component';
import { ReferenceComponent } from './components/tabs/reference/reference.component';
import { SobreComponent } from './components/sobre/sobre.component';



@NgModule({
  declarations: [AppComponent, TabContainerComponent, CeasarCipherComponent, VigenereCipherComponent, Sha256CipherComponent, ExplainModalComponent, ReferenceComponent, SobreComponent],

  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
