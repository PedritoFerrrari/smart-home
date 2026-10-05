import { BaseDeviceDecorator } from './BaseDeviceDecorator';

export class EnergyMonitorDecorator extends BaseDeviceDecorator {
    private consumptionWatts: number = 0;

    turnOn(): void {
        super.turnOn();
        this.consumptionWatts = Math.floor(Math.random() * 50) + 10; // Simula consumo
        console.log(`[Monitor de Energia] O dispositivo ${this.name} está consumindo ${this.consumptionWatts}W.`);
    }

    turnOff(): void {
        super.turnOff();
        console.log(`[Monitor de Energia] O dispositivo ${this.name} parou de consumir energia.`);
        this.consumptionWatts = 0;
    }

    getDetails(): string {
        return `${super.getDetails()} | Consumo Atual: ${this.consumptionWatts}W`;
    }
}