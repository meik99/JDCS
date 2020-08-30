export class ClassEntity {
  private _url: string;
  private _class: string;

  constructor(args?: any) {
    if (args) {
      if (args.url) {
        this.url = args.url;
      }
      if (args.class) {
        this.class = args.class;
      }
    }
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get class(): string {
    return this._class;
  }

  set class(value: string) {
    this._class = value;
  }
}
