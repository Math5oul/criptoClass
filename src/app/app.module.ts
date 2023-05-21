import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { CeasarCipherComponent } from './components/ceasear-cipher/ceasar-cipher.component';
import { FormsModule } from '@angular/forms';
import { VigenereCipherComponent } from './components/vigenere-cipher/vigenere-cipher.component';
import { Sha256CipherComponent } from './components/sha-cipher/sha-cipher.component';
import { ExplainModalComponent } from './components/explain-modal/explain-modal.component';



@NgModule({
  declarations: [AppComponent, TabContainerComponent, CeasarCipherComponent, VigenereCipherComponent, Sha256CipherComponent, ExplainModalComponent],

  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
