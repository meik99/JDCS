
export class CharacterSheet {
  private _name: string;
  private _alignment: string;
  private _personalityTraits: string;
  private _ideals: string;
  private _bonds: string;
  private _flaws: string;
  private _race: string;
  private _age: string;
  private _size: string;
  private _weight: string;

  constructor() {
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
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

  get personalityTraits(): string {
    return this._personalityTraits;
  }

  set personalityTraits(value: string) {
    this._personalityTraits = value;
  }

  get ideals(): string {
    return this._ideals;
  }

  set ideals(value: string) {
    this._ideals = value;
  }

  get bonds(): string {
    return this._bonds;
  }

  set bonds(value: string) {
    this._bonds = value;
  }

  get flaws(): string {
    return this._flaws;
  }

  set flaws(value: string) {
    this._flaws = value;
  }

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  get weight(): string {
    return this._weight;
  }

  set weight(value: string) {
    this._weight = value;
  }
}
