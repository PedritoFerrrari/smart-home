# Smart Home CLI

## Descrição do Projeto
Simulador de Automação Residencial via linha de comando (CLI). Resolve o problema de centralizar o controle de vários dispositivos eletrônicos (novos ou legados) num só lugar, deixando o código fácil de escalar e de adicionar novas funções sem quebrar o que já existe.

## Instruções de Execução
No terminal, abra a pasta principal do projeto e rode:

```bash
npm install
npm start
```

## Mapeamento dos 5 Padrões

**1. Singleton (Criacional)**
* **Onde apliquei:** Classe `SmartHomeHub`.
* **Justificativa:** Garante que a casa tenha só uma central de controle (Hub) ativa na memória, centralizando o registro dos aparelhos e evitando bugs de instâncias duplicadas.

**2. Factory Method (Criacional)**
* **Onde apliquei:** Classe `DeviceFactory`.
* **Justificativa:** Isola a lógica de criação dos aparelhos (Luz, Termostato). Fica bem mais fácil adicionar tipos novos de dispositivos no futuro sem mexer na central.

**3. Adapter (Estrutural)**
* **Onde apliquei:** Classe `LegacyTVAdapter`.
* **Justificativa:** Precisei plugar uma TV antiga com métodos incompatíveis no sistema novo. O Adapter fez a "tradução" pra TV velha funcionar exatamente igual aos dispositivos inteligentes.

**4. Decorator (Estrutural)**
* **Onde apliquei:** Classe `EnergyMonitorDecorator`.
* **Justificativa:** Ideal pra adicionar a função de "medir energia" em qualquer aparelho em tempo de execução, sem eu precisar criar subclasses repetitivas como `LuzComMedidor`.

**5. Command (Comportamental)**
* **Onde apliquei:** Classes `TurnOnCommand`, `TurnOffCommand` e `RemoteControl`.
* **Justificativa:** Transforma a ação de apertar botões em objetos isolados. Foi a melhor escolha pra conseguir enfileirar ações no controle remoto e implementar o recurso de "Desfazer" (Undo).
