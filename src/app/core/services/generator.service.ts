import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(sequenceLength: number): string{
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbolsSequence = "";

    for ( var i = 0; i < sequenceLength; i++ ) {
      symbolsSequence.split(characters.charAt(Math.floor(Math.random() * sequenceLength)));
   }

    return symbolsSequence;
  }
}

const generatedString = new InjectionToken<GeneratorService>('', {providedIn:"root", factory: ()=>)