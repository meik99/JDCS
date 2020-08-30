import {ProficiencyOptions} from './ProficiencyOptions';
import {ApiEntity} from './ApiEntity';
import {ClassEntity} from './ClassEntity';

export class Class {
  private _url: string;
  private _index: string;
  private _name: string;
  private _hitDie: number;
  private _proficiencyChoices: ProficiencyOptions;
  private _proficiencies: ApiEntity[] = [];
  private _savingThrows: ApiEntity[] = [];
  private _startingEquipment: ClassEntity;
  private _classLevels: ClassEntity;
  private _subclasses: ApiEntity[] = [];
  private _spellcasting: ClassEntity;

  constructor(args?: any) {
    if (args) {
      if (args.index) {
        this.index = args.index;
      }
      if (args.name) {
        this.name = args.name;
      }
      if (args.hit_die) {
        this.hitDie = args.hit_die;
      }
      if (args.proficiency_choices) {
        this.proficiencyChoices = new ProficiencyOptions(args.proficiency_choices);
      }
      if (args.proficiencies) {
        if (args.profciencies.forEach) {
          args.profciencies.forEach(item => {
            this.proficiencies.push(new ApiEntity(item));
          });
        }
      }
      if (args.saving_throws) {
        if (args.saving_throws.forEach) {
          args.saving_throws.forEach(item => {
            this.savingThrows.push(new ApiEntity(item));
          });
        }
      }
      if (args.starting_equipment) {
        this.startingEquipment = new ClassEntity(args.starting_equipment);
      }
      if (args.class_levels) {
        this.classLevels = new ClassEntity(args.class_levels);
      }
      if (args.subclasses) {
        if (args.subclasses.forEach){
          args.subclasses.forEach(item => {
            this.subclasses.push(new ApiEntity(item));
          });
        }
      }
      if (args.spellcasting) {
        this.spellcasting = new ClassEntity(args.spellcasting);
      }
    }
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get hitDie(): number {
    return this._hitDie;
  }

  set hitDie(value: number) {
    this._hitDie = value;
  }

  get proficiencyChoices(): ProficiencyOptions {
    return this._proficiencyChoices;
  }

  set proficiencyChoices(value: ProficiencyOptions) {
    this._proficiencyChoices = value;
  }

  get proficiencies(): ApiEntity[] {
    return this._proficiencies;
  }

  set proficiencies(value: ApiEntity[]) {
    this._proficiencies = value;
  }

  get savingThrows(): ApiEntity[] {
    return this._savingThrows;
  }

  set savingThrows(value: ApiEntity[]) {
    this._savingThrows = value;
  }

  get startingEquipment(): ClassEntity {
    return this._startingEquipment;
  }

  set startingEquipment(value: ClassEntity) {
    this._startingEquipment = value;
  }

  get classLevels(): ClassEntity {
    return this._classLevels;
  }

  set classLevels(value: ClassEntity) {
    this._classLevels = value;
  }

  get subclasses(): ApiEntity[] {
    return this._subclasses;
  }

  set subclasses(value: ApiEntity[]) {
    this._subclasses = value;
  }

  get spellcasting(): ClassEntity {
    return this._spellcasting;
  }

  set spellcasting(value: ClassEntity) {
    this._spellcasting = value;
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
}
