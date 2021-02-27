import { GeneratorService } from './generator.service';

export function generatorFactory(sequenceLength: number): Function {
  return (generatorService: GeneratorService) => generatorService.generate(sequenceLength);
}
