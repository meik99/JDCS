export const LONG_NAMES = new Map(
  [
    ['CON', 'Constitution'],
    ['CHA', 'Charisma'],
    ['DEX', 'Dexterity'],
    ['INT', 'Intelligence'],
    ['STR', 'Strength'],
    ['WIS', 'Wisdom']
  ]
);

export class AbilityBonus {
  private _name: string;
  private _bonus: number;
  private _url: string;

  constructor(args?: any) {
    if (args) {
      if (args.name) {
        this.name = args.name;
      }
      if (args.bonus){
        this.bonus = args.bonus;
      } else {
        this.bonus = 0;
      }
      if (args.url) {
        this.url = args.url;
      }
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get bonus(): number {
    return this._bonus;
  }

  set bonus(value: number) {
    this._bonus = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get longName(): string {
    if (LONG_NAMES.has(this.name)) {
      return LONG_NAMES.get(this.name);
    } else {
      return 'Unknown';
    }
  }
}
