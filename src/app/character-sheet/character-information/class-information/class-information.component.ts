import { Component, OnInit } from '@angular/core';
import {DndService} from '../../../service/dnd.service';
import {Class} from '../../../entity/Class';

@Component({
  selector: 'app-class-information',
  templateUrl: './class-information.component.html',
  styleUrls: ['./class-information.component.css']
})
export class ClassInformationComponent implements OnInit {
  classes: Class[] = null;
  private _error: any = null;

  constructor(
    private _dndService: DndService
  ) { }

  ngOnInit(): void {
    this._dndService.getClasses()
      .then(result => {
        console.log(result);
        this.classes = result;
        this.error = null;
      })
      .catch(err => {
        this.error = err;
        console.log(this.error);
      });
  }

  get error(): any {
    return this._error === null ? null : JSON.stringify(this._error);
  }

  set error(value: any) {
    this._error = value;
  }
}
