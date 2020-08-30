import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheet} from '../../entity/CharacterSheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  @Input()
  characterSheet: CharacterSheet;

  constructor() { }

  ngOnInit(): void {
  }

}
