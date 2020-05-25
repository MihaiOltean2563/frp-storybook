import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorsComponent } from './styleguide/colors/colors.component';
import { BordersComponent } from './styleguide/typography/borders/borders.component';
import { HeadingsComponent } from './styleguide/typography/headings/headings.component';
import { ContainerComponent } from './styleguide/layout/container/container.component';
import { GridComponent } from './styleguide/layout/grid/grid.component';
import { IconsComponent } from './styleguide/icons/icons.component';
import { MeasureComponent } from './styleguide/typography/measure/measure.component';
import { FontSizesComponent } from './styleguide/typography/font-sizes/font-sizes.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    ColorsComponent,
    BordersComponent,
    HeadingsComponent,
    ContainerComponent,
    GridComponent,
    IconsComponent,
    MeasureComponent,
    FontSizesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
