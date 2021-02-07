import { ConfigOptionsService } from "../services/config-options.service";
import { ConstantsService } from "../services/constants.service";
import { GeneratorService } from "../services/generator.service";

export const GeneratorServiceProvider = {
  provide: GeneratorService,
  useFactory: GeneratorFactory,
  deps: [ConstantsService, ConfigOptionsService]
}