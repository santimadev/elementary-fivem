import * as Cfx from 'fivem-js';
import { Chat } from '../utils/Chat'
import { $t } from '../utils/i18n'

// Chat.addTemplates()

setImmediate(() => {
  emitNet('helloserver');
});

RegisterCommand('halo', () => {
  console.log('Hello babe@')
}, false)

RegisterCommand(
  'car',
  async (_, args) => {
    const model = args[0]
    // Missing argument
    if (!model) {
      Chat.sendMessage({
        args: ['[*]', $t('MISSING_ARGUMENT')],
        variant: 'warning',
      })
      return
    }
    try {
      const playerCoords = Cfx.Game.PlayerPed.Position;
      const vehicle = await Cfx.World.createVehicle(new Cfx.Model(model), playerCoords, 4);
      if (!vehicle) throw 'Invalid model name'
      Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
      Chat.sendMessage({
        args: ['[*]', $t('VEHICLE_SUCCESSFULLY_SPAWNED')],
        variant: 'success',
      })
    } catch (err) {
      Chat.sendMessage({
        args: ['[*]', $t('INVALID_VEHICLE_MODEL')],
        variant: 'warning',
      })
    }
  },
  false,
);

onNet('helloclient', message => {
  console.log(`The server replied: ${message}`);
});
