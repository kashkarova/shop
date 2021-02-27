import { GeneratorService } from './generator.service';

export function generatorFactory(sequenceLength: number): any {
  return (generatorService: GeneratorService) => generatorService.generate(sequenceLength);
}
