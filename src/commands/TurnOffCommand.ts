import { ICommand } from './ICommand';
import { ISmartDevice } from '../devices/ISmartDevice';

export class TurnOffCommand implements ICommand {
    constructor(private device: ISmartDevice) { }

    execute(): void { this.device.turnOff(); }
    undo(): void { this.device.turnOn(); }
}