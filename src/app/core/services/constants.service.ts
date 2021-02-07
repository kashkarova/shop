import { Injectable } from '@angular/core';

const constantAppObj = { App: "TaskManager", Ver: "1.0", API_URL: "http://product-store.com" }

@Injectable({
  providedIn: 'root',
  useValue: constantAppObj
})

export class ConstantsService {

  constructor() { }
}