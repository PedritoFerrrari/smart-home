## Smart Home CLI - Padrões de Projeto em TypeScript

### Descrição do Projeto
O **Smart Home CLI** é um simulador de automação residencial executado via terminal. Ele resolve o problema de gerenciar múltiplos dispositivos eletrônicos (modernos e antigos) de maneira unificada e extensível. O sistema permite adicionar novos dispositivos dinamicamente, integrar aparelhos legados, monitorar o consumo de energia sem alterar as classes base e executar comandos com a capacidade de serem desfeitos (Undo).

### Uso do TypeScript
O projeto faz uso intenso dos recursos do TypeScript para garantir tipagem forte e boas práticas de Orientação a Objetos:
- **Interfaces e Classes Abstratas:** `ISmartDevice`, `AbstractDevice`, `ICommand`.
- **Enums:** `DeviceStatus` e `DeviceType`.
- **Modificadores de Acesso e Generics:** Uso rigoroso de `private`, `protected`, `public` e arrays genéricos (`Array<ICommand>`).

### Instruções de Execução
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
1. No terminal, na raiz do projeto, instale as dependências:
   ```bash
   npm install
