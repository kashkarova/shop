function GeneratorFactory(sequenceLength: number): string {
  return this.generatorService.generate(sequenceLength);
}