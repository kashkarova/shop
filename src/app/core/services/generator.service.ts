import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(sequenceLength: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let symbolsSequence = '';

    for (let i = 0; i < sequenceLength; i++) {
      symbolsSequence = symbolsSequence + characters.charAt(Math.floor(Math.random() * sequenceLength));
    }

    return symbolsSequence;
  }
}

export const GENERATE_STRING = new InjectionToken<string>('Generate string');
