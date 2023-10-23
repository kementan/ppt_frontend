import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { PinPointComponent } from './pin-point/pin-point.component';
import { SelectRoleComponent } from './select-role/select-role.component';
import { CheckboxSubSectorComponent } from './checkbox-sub-sector/checkbox-sub-sector.component';
import { SelectLandStatusComponent } from './select-land-status/select-land-status.component';

@NgModule({
  declarations: [
    RegionComponent,
    PinPointComponent,
    SelectRoleComponent,
    CheckboxSubSectorComponent,
    SelectLandStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegionComponent, 
    PinPointComponent,
    SelectRoleComponent,
    CheckboxSubSectorComponent,
    SelectLandStatusComponent
  ]
})
export class PagesSharedModule { }
