import { Component, OnInit } from '@angular/core';
import {DndService} from '../service/dnd.service';
import {Class} from '../entity/Class';
import {CharacterSheet} from '../entity/CharacterSheet';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {
  characterSheet: CharacterSheet = new CharacterSheet();

  constructor(

  ) { }

  ngOnInit(): void {
    this.characterSheet.alignment = 'Lawful Good';
  }

}
