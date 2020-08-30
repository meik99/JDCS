import {AbilityBonus, LONG_NAMES} from './AbilityBonus';
import {ProficiencyOptions} from './ProficiencyOptions';
import {ApiEntity} from './ApiEntity';

export class Race {
  private _id: string;
  private _index: string;
  private _name: string;
  private _alignment: string;
  private _abilityBonuses: any = {};
  private _sizeClass: string;
  private _sizeDescription: string;
  private _age: string;
  private _speed: string;
  private _languages: ApiEntity[] = [];
  private _languageDescription: string;
  private _startingProficiencies: any[] = [];
  private _startingProficienciesOptions: ProficiencyOptions;
  private _traits: ApiEntity[] = [];

  constructor(args?: any) {
    LONG_NAMES.forEach((value, key) => {
      this.abilityBonuses[key] = new AbilityBonus({
        name: key,
        url: '',
        bonus: 0
      });
    });

    if (args) {
      if (args._id) {
        this.id = args._id;
      }
      if (args.index) {
        this.index = args.index;
      }
      if (args.name) {
        this.name = args.name;
      }
      if (args.alignment) {
        this.alignment = args.alignment;
      }
      if (args.ability_bonuses){
        args.ability_bonuses.forEach(item => {
          this.abilityBonuses[item.name] = new AbilityBonus(item);
        });
      }
      if (args.abilityBonuses) {
        this.abilityBonuses = args.abilityBonuses;
      }
      if (args.size) {
        this.sizeClass = args.size;
      }
      if (args.size_description) {
        this.sizeDescription = args.size_description;
      }
      if (args.age) {
        this.age = args.age;
      }
      if (args.language_desc){
        this.languageDescription = args.language_desc;
      }
      if (args.languages) {
        if (args.languages.forEach) {
          args.languages.forEach(item => {
            this.languages.push(new ApiEntity(item));
          });
        }else {
          this.languages = args.languages;
        }
      }
      if (args.starting_proficiencies) {
        this.startingProficiencies = args.starting_proficiencies;
      }
      if (args.starting_proficiency_options) {
        this.startingProficienciesOptions = new ProficiencyOptions(args.starting_proficiency_options);
      }
      if (args.speed) {
        this.speed = args.speed;
      }
      if (args.traits && args.traits.forEach) {
        args.traits.forEach(item => {
          this.traits.push(new ApiEntity(item));
        });
      }
    }
  }

  get traits(): ApiEntity[] {
    return this._traits;
  }

  set traits(value: ApiEntity[]) {
    this._traits = value;
  }

  get speed(): string {
    return this._speed;
  }

  set speed(value: string) {
    this._speed = value;
  }

  get startingProficienciesOptions(): ProficiencyOptions {
    return this._startingProficienciesOptions;
  }

  set startingProficienciesOptions(value: ProficiencyOptions) {
    this._startingProficienciesOptions = value;
  }

  get startingProficiencies(): any[] {
    return this._startingProficiencies;
  }

  set startingProficiencies(value: any[]) {
    this._startingProficiencies = value;
  }

  get languages(): any[] {
    return this._languages;
  }

  set languages(value: any[]) {
    this._languages = value;
  }

  get languageDescription(): string {
    return this._languageDescription;
  }

  set languageDescription(value: string) {
    this._languageDescription = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get index(): string {
    return this._index;
  }

  set index(value: string) {
    this._index = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get alignment(): string {
    return this._alignment;
  }

  set alignment(value: string) {
    this._alignment = value;
  }

  get abilityBonuses(): any {
    return this._abilityBonuses;
  }

  set abilityBonuses(value: any) {
    this._abilityBonuses = value;
  }

  get sizeClass(): string {
    return this._sizeClass;
  }

  set sizeClass(value: string) {
    this._sizeClass = value;
  }

  get sizeDescription(): string {
    return this._sizeDescription;
  }

  set sizeDescription(value: string) {
    this._sizeDescription = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }
}
