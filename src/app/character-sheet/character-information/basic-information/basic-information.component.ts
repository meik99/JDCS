import {Component, Input, OnInit} from '@angular/core';
import {DndService} from '../../../service/dnd.service';
import {Race} from '../../../entity/Race';
import {CharacterSheet} from '../../../entity/CharacterSheet';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  private _error: any = null;

  @Input()
  characterSheet: CharacterSheet;

  constructor(
    private _dndService: DndService
  ) { }

  ngOnInit(): void {

  }


  get error(): any {
    return !this._error ? null : JSON.stringify(this._error);
  }

  set error(value: any) {
    this._error = value;
  }
}
