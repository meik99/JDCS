import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheet} from '../../../entity/CharacterSheet';

@Component({
  selector: 'app-basic-sheet',
  templateUrl: './basic-sheet.component.html',
  styleUrls: ['./basic-sheet.component.css']
})
export class BasicSheetComponent implements OnInit {
  @Input()
  characterSheet: CharacterSheet;

  constructor() { }

  ngOnInit(): void {
  }

}
