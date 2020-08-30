import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheet} from '../../../entity/CharacterSheet';

@Component({
  selector: 'app-proficiency-sheet',
  templateUrl: './proficiency-sheet.component.html',
  styleUrls: ['./proficiency-sheet.component.css']
})
export class ProficiencySheetComponent implements OnInit {

  @Input()
  characterSheet: CharacterSheet;

  constructor() { }

  ngOnInit(): void {
  }

}
