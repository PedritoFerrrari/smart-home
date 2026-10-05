import { ISmartDevice, DeviceStatus } from './ISmartDevice';

export abstract class AbstractDevice implements ISmartDevice {
    public status: DeviceStatus = DeviceStatus.OFF;

    constructor(public id: string, public name: string) { }

    public turnOn(): void {
        this.status = DeviceStatus.ON;
        console.log(`[${this.name}] está agora LIGADO.`);
    }

    public turnOff(): void {
        this.status = DeviceStatus.OFF;
        console.log(`[${this.name}] está agora DESLIGADO.`);
    }

    public abstract getDetails(): string;
}