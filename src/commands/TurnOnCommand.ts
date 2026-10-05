import { ICommand } from './ICommand';
import { ISmartDevice } from '../devices/ISmartDevice';

export class TurnOnCommand implements ICommand {
    constructor(private device: ISmartDevice) { }

    execute(): void { this.device.turnOn(); }
    undo(): void { this.device.turnOff(); }
}