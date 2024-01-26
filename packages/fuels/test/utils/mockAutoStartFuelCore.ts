import type { SpyInstance } from 'vitest';

import * as autoStartFuelCoreMod from '../../src/cli/commands/dev/autoStartFuelCore';

export const mockStartFuelCore = (): {
  killChildProcess: SpyInstance;
  autoStartFuelCore: SpyInstance;
  fuelCore: autoStartFuelCoreMod.FuelCoreNode;
} => {
  const killChildProcess = vi.fn();

  const fuelCore: autoStartFuelCoreMod.FuelCoreNode = {
    bindIp: '0.0.0.0',
    accessIp: '127.0.0.1',
    port: 4000,
    providerUrl: `http://127.0.0.1:4000/graphql`,
    killChildProcess,
    chainConfigPath: '/some/path/chainConfig.json',
  };

  const autoStartFuelCore = vi
    .spyOn(autoStartFuelCoreMod, 'autoStartFuelCore')
    .mockResolvedValue(fuelCore);

  return { autoStartFuelCore, killChildProcess, fuelCore };
};
