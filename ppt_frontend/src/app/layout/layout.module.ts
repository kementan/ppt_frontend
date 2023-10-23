
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TimeAgoPipe } from '../_services/ago.pipe'; 

import { FeatherIconsComponent } from "./_shared/feather-icons/feather-icons.component"
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";
import { NotificationComponent } from "./header/_c/notification/notification.component";
import { MyAccountComponent } from "./header/_c/my-account/my-account.component";
import { SearchComponent } from "./header/_c/search/search.component";
import { SwiperModule } from "swiper/angular";
import { SwiperComponent } from "./header/_c/swiper/swiper.component";
import { FloatingMenuComponent } from "./floating-menu/floating-menu.component";

import { LayoutService } from "./layout.service";
import { NavService } from "./sidebar/sidebar.service";

@NgModule({
  declarations: [
    FeatherIconsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    NotificationComponent,
    MyAccountComponent,
    SearchComponent,
    SwiperComponent,
    FloatingMenuComponent,
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [
    NavService, LayoutService
  ],
  exports: [
    FeatherIconsComponent, 
    FormsModule, 
    ReactiveFormsModule, 
    SwiperModule
  ],
})
export class LayoutModule { }
