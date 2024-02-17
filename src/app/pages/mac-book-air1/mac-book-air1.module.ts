import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { MacBookAir1 } from './mac-book-air1.component'

const routes = [
  {
    path: '',
    component: MacBookAir1,
  },
]

@NgModule({
  declarations: [MacBookAir1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MacBookAir1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MacBookAir1Module {}
