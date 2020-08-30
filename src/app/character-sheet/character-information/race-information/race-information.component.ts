import {Component, Input, OnInit} from '@angular/core';
import {Race} from '../../../entity/Race';
import {DndService} from '../../../service/dnd.service';
import {CharacterSheet} from '../../../entity/CharacterSheet';
import {ApiEntity} from '../../../entity/ApiEntity';

@Component({
  selector: 'app-race-information',
  templateUrl: './race-information.component.html',
  styleUrls: ['./race-information.component.css']
})
export class RaceInformationComponent implements OnInit {
  private _error: any = null;
  private _raceIndex = '';
  private _race: Race = null;
  races: Race[] = null;
  startingProficiencyOptions: any;

  @Input()
  characterSheet: CharacterSheet;

  constructor(
    private _dndService: DndService
  ) { }

  ngOnInit(): void {
    this._dndService
      .getRaces()
      .then(races => {
        this.races = races;

        if (this.races && this.races.length && this.races.length > 0) {
          this.raceIndex = this.races[0].index;
        }
        this.error = null;
      })
      .catch(err => {
        console.log(err);
        this.error = err;
      });
  }

  get race(): Race {
    return this._race;
  }

  set race(value: Race) {
    this._race = value;
    this._raceIndex = value.index;
    this.characterSheet.race = this.race.name;
  }

  get error(): any {
    return this._error === null ? null : JSON.stringify(this._error);
  }

  set error(value: any) {
    this._error = value;
  }

  get raceIndex(): string {
    return this._raceIndex;
  }

  set raceIndex(value: string) {
    this._raceIndex = value;
    if (this.raceIndex && this.raceIndex !== 'custom') {
      this._dndService.getRace(this.raceIndex)
        .then(race => {
          this.race = race;
          console.log(this.race);
          this.error = null;
          if (this.race.startingProficienciesOptions) {
            this.startingProficiencyOptions = {};
            this.race.startingProficienciesOptions.proficiencies.forEach(item => {
              this.startingProficiencyOptions[item.name] = {
                name: item.name,
                checked: false
              };
            });
          }
        })
        .catch(err => this.error = err);
    } else {
      this.race = new Race({
        index: 'custom',
        name: 'Custom Race',
        alignment: 'You chose your own race. Your destiny is yours to decide.',
        size_description: 'Your race can be as tall or small as you want it to be',
        age: 'Is your race as old as time and the gods themselves? Or is it just emerging?',
        language_desc: 'What languages does you race speak? Most speak two, common and a native one.' });
    }
  }

  removeStartingProficiencies(name: string): void {
    if (this.race && this.race.startingProficiencies) {
      this.race.startingProficiencies = this.race.startingProficiencies.filter(item => item.name !== name);
    }
  }

  addStartingProficiencies(): void {
    if (this.race) {
      if (!this.race.startingProficiencies) {
        this.race.startingProficiencies = [];
      }
      this.race.startingProficiencies.push({
        name: '',
      });
    }
  }

  checkStartingProficiency($event: Event, name: string): boolean {
    if (this.startingProficiencyOptions[name].checked) {
      this.startingProficiencyOptions[name].checked = false;
      return true;
    }

    let count = 0;
    for (const proficiency of Object.keys(this.startingProficiencyOptions)) {
      if (this.startingProficiencyOptions[proficiency].checked) {
        count++;
      }
    }
    if (count < this.race.startingProficienciesOptions.choose) {
      this.startingProficiencyOptions[name].checked = true;
      return true;
    }

    $event.preventDefault();
    console.log(this.startingProficiencyOptions);
    return false;
  }

  removeTrait(name: string): void {
    if (this.race && this.race.traits) {
      this.race.traits = this.race.traits.filter(item => item.name !== name);
    }
  }

  addTrait(): void {
    if (this.race) {
      if (!this.race.traits) {
        this.race.traits = [];
      }
      this.race.traits.push(new ApiEntity({
        name: ''
      }));
    }
  }

  removeLanguage(name: any): void {
    if (this.race && this.race.languages) {
      this.race.languages = this.race.languages.filter(item => item.name !== name);
    }
  }

  addLanguage(): void {
    if (this.race) {
      if (!this.race.languages) {
        this.race.languages = [];
      }
      this.race.languages.push(new ApiEntity({
        name: ''
      }));
    }
  }
}
