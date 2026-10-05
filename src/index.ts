import { SmartHomeHub } from './core/SmartHomeHub';
import { DeviceFactory } from './devices/DeviceFactory';
import { DeviceType } from './devices/ISmartDevice';
import { LegacyTV } from './devices/LegacyTV';
import { LegacyTVAdapter } from './devices/LegacyTVAdapter';
import { EnergyMonitorDecorator } from './decorators/EnergyMonitorDecorator';
import { RemoteControl } from './core/RemoteControl';
import { TurnOnCommand } from './commands/TurnOnCommand';
import { TurnOffCommand } from './commands/TurnOffCommand';

function main() {
    console.log("=== INICIANDO SISTEMA SMART HOME ===\n");

    // 1. SINGLETON: Obter a instância central
    const hub = SmartHomeHub.getInstance();

    // 2. FACTORY METHOD: Criando dispositivos modernos
    let light = DeviceFactory.createDevice(DeviceType.LIGHT, 'l1', 'Luz da Sala');
    let thermo = DeviceFactory.createDevice(DeviceType.THERMOSTAT, 't1', 'Termostato do Quarto');

    // 3. DECORATOR: Adicionando funcionalidade de monitoramento de energia à Luz da Sala
    light = new EnergyMonitorDecorator(light);

    // 4. ADAPTER: Integrando uma TV antiga ao sistema
    const oldTv = new LegacyTV();
    const tvAdapter = new LegacyTVAdapter('tv1', 'TV Tubo da Cozinha', oldTv);

    // Registrando no Hub
    hub.addDevice(light);
    hub.addDevice(thermo);
    hub.addDevice(tvAdapter);

    hub.showAllDevices();

    // 5. COMMAND: Usando o controle remoto para gerenciar ações com suporte a Undo
    const remote = new RemoteControl();

    const turnOnLight = new TurnOnCommand(light);
    const turnOnTV = new TurnOnCommand(tvAdapter);
    const turnOffTV = new TurnOffCommand(tvAdapter);

    console.log("--- Executando Comandos ---");
    remote.submit(turnOnLight);
    remote.submit(turnOnTV);

    hub.showAllDevices();

    console.log("--- Desfazendo Ações (Undo) ---");
    remote.undoLastAction(); // Desfaz ligar a TV
    remote.undoLastAction(); // Desfaz ligar a Luz

    hub.showAllDevices();
}

main();