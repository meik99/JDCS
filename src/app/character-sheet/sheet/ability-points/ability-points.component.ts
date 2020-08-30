import {Component, Input, OnInit} from '@angular/core';
import {CharacterSheet} from '../../../entity/CharacterSheet';

@Component({
  selector: 'app-ability-points',
  templateUrl: './ability-points.component.html',
  styleUrls: ['./ability-points.component.css']
})
export class AbilityPointsComponent implements OnInit {
  @Input()
  characterSheet: CharacterSheet;

  constructor() { }

  ngOnInit(): void {
  }

}
