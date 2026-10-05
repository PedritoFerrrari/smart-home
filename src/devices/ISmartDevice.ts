export enum DeviceStatus {
    ON = 'LIGADO',
    OFF = 'DESLIGADO'
}

export enum DeviceType {
    LIGHT = 'LIGHT',
    THERMOSTAT = 'THERMOSTAT'
}

export interface ISmartDevice {
    id: string;
    name: string;
    status: DeviceStatus;
    turnOn(): void;
    turnOff(): void;
    getDetails(): string;
}