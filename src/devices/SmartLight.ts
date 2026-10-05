import { AbstractDevice } from './AbstractDevice';

export class SmartLight extends AbstractDevice {
    public getDetails(): string {
        return `Lâmpada Inteligente [${this.name}] - Status: ${this.status}`;
    }
}
