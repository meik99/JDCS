export class ApiEntity {
  private _name: string;
  private _url: string;

  constructor(args?: any) {
    if (args.name) {
      this.name = args.name;
    }
    if (args.url) {
      this.url = args.url;
    }
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
