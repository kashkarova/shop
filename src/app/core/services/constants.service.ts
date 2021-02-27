import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  TaskManagesConst = { App: 'TaskManager', Ver: '1.0', API_URL: 'http://product-store.com' };

  constructor() { }
}

export const TaskManagesConst = new ConstantsService().TaskManagesConst;

