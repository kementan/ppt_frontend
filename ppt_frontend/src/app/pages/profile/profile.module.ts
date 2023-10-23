import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { PagesSharedModule } from '../pages-shared/pages-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule, ProfileRoutingModule, LayoutModule, PagesSharedModule, BrowserModule, PdfViewerModule
  ]
})
export class ProfileModule { }
