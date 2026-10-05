import { ISmartDevice } from '../devices/ISmartDevice';

export class SmartHomeHub {
    private static instance: SmartHomeHub;
    private devices: Map<string, ISmartDevice> = new Map();

    private constructor() {
        console.log("Central SmartHomeHub inicializada.");
    }

    public static getInstance(): SmartHomeHub {
        if (!SmartHomeHub.instance) {
            SmartHomeHub.instance = new SmartHomeHub();
        }
        return SmartHomeHub.instance;
    }

    public addDevice(device: ISmartDevice): void {
        this.devices.set(device.id, device);
        console.log(`Dispositivo ${device.name} registrado no Hub.`);
    }

    public showAllDevices(): void {
        console.log("\n--- Dispositivos na Rede ---");
        this.devices.forEach(device => {
            console.log(device.getDetails());
        });
        console.log("----------------------------\n");
    }
}