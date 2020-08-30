import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Race} from '../entity/Race';
import {environment} from '../../environments/environment';
import {Class} from '../entity/Class';

@Injectable({
  providedIn: 'root'
})
export class DndService {

  constructor(
    private _http: HttpClient
  ) { }

  getRaces(): Promise<Race[]> {
    return new Promise<Race[]>((resolve, reject) => {
      this._http.get(environment.baseUrl + 'api/races')
        .subscribe(
          result => {
            const requestResult: any = result;
            const races: Race[] = [];
            if (requestResult && requestResult.results) {
              requestResult.results.forEach(item => {
                races.push(new Race(item));
              });

              resolve(races);
            }
          },
          error => {
            console.log(error);
            reject(error);
          }
        );
    });
  }

  getRace(index: string): Promise<Race> {
    return new Promise<Race>((resolve, reject) => {
      this._http.get(environment.baseUrl + `api/races/${index}`)
        .subscribe(
          result => {
            console.log(result);
            resolve(new Race(result));
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getClasses(): Promise<Class[]> {
    return new Promise<Class[]>((resolve, reject) => {
      this._http.get(environment.baseUrl + 'api/classes')
        .subscribe(
          request => {
            const classResult: any = request;
            const result: Class[] = [];
            if (classResult && classResult.results) {
              classResult.results.forEach(item => {
                result.push(new Class(item));
              });
            }
            resolve(result);
          },
          error => {
            reject(error);
          });
    });
  }
}
