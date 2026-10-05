import { ISmartDevice, DeviceStatus } from '../devices/ISmartDevice';

export abstract class BaseDeviceDecorator implements ISmartDevice {
    constructor(protected wrappee: ISmartDevice) { }

    get id(): string { return this.wrappee.id; }
    get name(): string { return this.wrappee.name; }
    get status(): DeviceStatus { return this.wrappee.status; }

    turnOn(): void { this.wrappee.turnOn(); }
    turnOff(): void { this.wrappee.turnOff(); }
    getDetails(): string { return this.wrappee.getDetails(); }
}