import { ICommand } from '../commands/ICommand';

export class RemoteControl {
    private history: Array<ICommand> = [];

    public submit(command: ICommand): void {
        command.execute();
        this.history.push(command);
    }

    public undoLastAction(): void {
        const lastCommand = this.history.pop();
        if (lastCommand) {
            console.log("Desfazendo última ação...");
            lastCommand.undo();
        } else {
            console.log("Nenhuma ação para desfazer.");
        }
    }
}