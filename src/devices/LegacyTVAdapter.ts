import { ISmartDevice, DeviceStatus } from './ISmartDevice';
import { LegacyTV } from './LegacyTV';

export class LegacyTVAdapter implements ISmartDevice {
    public status: DeviceStatus = DeviceStatus.OFF;

    constructor(
        public id: string,
        public name: string,
        private legacyTV: LegacyTV
    ) { }

    turnOn(): void {
        this.legacyTV.powerOn();
        this.status = DeviceStatus.ON;
    }

    turnOff(): void {
        this.legacyTV.powerOff();
        this.status = DeviceStatus.OFF;
    }

    getDetails(): string {
        return `TV Legada Adaptada [${this.name}] - Status: ${this.status}`;
    }
}