import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configModel: ConfigModel;

  constructor() {
    this.configModel = new ConfigModel();
   }

  setConfigModel(
    id: number,
    login: string,
    email: string,
    passwordHash: string,
    dateOfBirth: Date
  ): void {
    this.configModel.id = id;
    this.configModel.login = login;
    this.configModel. email = email;
    this.configModel.passwordHash = passwordHash;
    this.configModel.dateOfBirth = dateOfBirth;
  }

  getConfigModel(): ConfigModel {
    return this.configModel;
  }
}
