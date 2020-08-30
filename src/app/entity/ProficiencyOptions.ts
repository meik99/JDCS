import {ApiEntity} from './ApiEntity';

export class ProficiencyOptions {
  private _choose: number;
  private _type: string;
  private _proficiencies: ApiEntity[] = [];

  constructor(args?: any) {
    if (args) {
      if (args.choose) {
        this.choose = args.choose;
      }
      if (args.type) {
        this.type = args.type;
      }
      if (args.from) {
        if (args.from.forEach) {
          args.from.forEach(item => {
            this.proficiencies.push(new ApiEntity(item));
          });
        }
      }
    }
  }

  get choose(): number {
    return this._choose;
  }

  set choose(value: number) {
    this._choose = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get proficiencies(): ApiEntity[] {
    return this._proficiencies;
  }

  set proficiencies(value: ApiEntity[]) {
    this._proficiencies = value;
  }
}
