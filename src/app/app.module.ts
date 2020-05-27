import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorsComponent } from './styleguide/colors/colors.component';
import { BordersComponent } from './styleguide/typography/borders/borders.component';
import { ContainerComponent } from './styleguide/layout/container/container.component';
import { GridComponent } from './styleguide/layout/grid/grid.component';
import { IconsComponent } from './styleguide/icons/icons.component';
import { TypographyComponent } from './styleguide/typography/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    ColorsComponent,
    BordersComponent,
    ContainerComponent,
    GridComponent,
    IconsComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
