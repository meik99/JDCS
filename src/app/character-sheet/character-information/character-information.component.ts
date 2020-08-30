import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheet} from '../../entity/CharacterSheet';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.css']
})
export class CharacterInformationComponent implements OnInit {
  @Input()
  characterSheet: CharacterSheet

  constructor() { }

  ngOnInit(): void {
  }

}
