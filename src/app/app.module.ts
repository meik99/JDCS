import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { BasicInformationComponent } from './character-sheet/character-information/basic-information/basic-information.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DndService} from './service/dnd.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClassInformationComponent} from './character-sheet/character-information/class-information/class-information.component';
import { RaceInformationComponent } from './character-sheet/character-information/race-information/race-information.component';
import { CharacterInformationComponent } from './character-sheet/character-information/character-information.component';
import { SheetComponent } from './character-sheet/sheet/sheet.component';
import { BasicSheetComponent } from './character-sheet/sheet/basic-sheet/basic-sheet.component';
import { AbilityPointsComponent } from './character-sheet/sheet/ability-points/ability-points.component';
import { ProficiencySheetComponent } from './character-sheet/sheet/proficiency-sheet/proficiency-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    BasicInformationComponent,
    ClassInformationComponent,
    RaceInformationComponent,
    CharacterInformationComponent,
    SheetComponent,
    BasicSheetComponent,
    AbilityPointsComponent,
    ProficiencySheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DndService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
