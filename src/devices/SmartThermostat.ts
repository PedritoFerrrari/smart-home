import { AbstractDevice } from './AbstractDevice';

export class SmartThermostat extends AbstractDevice {
    public getDetails(): string {
        return `Termostato Inteligente [${this.name}] - Status: ${this.status} (Alvo: 22°C)`;
    }
}