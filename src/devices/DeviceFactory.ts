import { ISmartDevice, DeviceType } from './ISmartDevice';
import { SmartLight } from './SmartLight';
import { SmartThermostat } from './SmartThermostat';

export class DeviceFactory {
    public static createDevice(type: DeviceType, id: string, name: string): ISmartDevice {
        switch (type) {
            case DeviceType.LIGHT:
                return new SmartLight(id, name);
            case DeviceType.THERMOSTAT:
                return new SmartThermostat(id, name);
            default:
                throw new Error('Tipo de dispositivo desconhecido.');
        }
    }
}