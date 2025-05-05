# Treinador de Codificação

Este projeto é um ambiente de codificação interativo e educativo projetado para ensinar programação. Ele oferece um editor de código amigável com sugestões em tempo real, explicações detalhadas e exemplos de código.

## Tecnologias Utilizadas

- Next.js 13+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui
- Monaco Editor
- Lucide React (ícones)

## Estrutura de Arquivos

```

Here's the updated project structure section of the README, including all the TSX components we've created:

```markdown
## Estrutura de Arquivos



online-coding-trainer/
├── app/
│   ├── components/
│   │   ├── CodeSuggestions.tsx
│   │   ├── ExplanationPopup.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── select.tsx
│   │       ├── card.tsx
│   │       └── dropdown-menu.tsx
│   ├── utils/
│   │   └── codeHelpers.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── [arquivos estáticos]
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```
## Instalação e Execução

1. Clone o repositório:
```

git clone [https://github.com/seu-usuario/online-coding-trainer.git](https://github.com/seu-usuario/online-coding-trainer.git)
cd online-coding-trainer

```plaintext

2. Instale as dependências:
```

npm install

```plaintext

3. Execute o servidor de desenvolvimento:
```

npm run dev

```plaintext

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Casos de Uso

1. **Aprendizado Interativo**: Programadores podem selecionar exemplos de código predefinidos e modificá-los no editor.
2. **Sugestões em Tempo Real**: À medida que o usuário digita, sugestões de código aparecem para auxiliar na escrita.
3. **Explicações Detalhadas**: Cada palavra-chave ou símbolo tem uma explicação detalhada que aparece em um popup.
4. **Exemplos de Código**: Vários exemplos de código estão disponíveis para demonstrar diferentes conceitos de programação.

## Trechos de Código Importantes

### app/page.tsx (componente principal)

```tsx
export default function Home() {
// ... (estado e hooks)

return (
 <div className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
   <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">
     <Sparkles className="inline-block mr-2" />
     Treinador de Codificação Mágica para Crianças
   </h1>
   {/* ... (seletor de exemplos) */}
   <div className="relative mb-6">
     <MonacoEditor
       height="400px"
       language="javascript"
       theme="vs-dark"
       value={code}
       onChange={handleEditorChange}
       onMount={handleEditorDidMount}
       options={{
         // ... (opções do editor)
       }}
     />
     {/* ... (componentes de sugestões e explicações) */}
   </div>
   {/* ... (botão de limpar código) */}
 </div>
)
}
```

### app/utils/codeHelpers.ts

```typescript
export const codeExamples: { [key: string]: string } = {
  "Variáveis e Tipos de Dados": `
    // Variáveis são como caixinhas onde guardamos informações
    let idade = 10; // Aqui guardamos um número
    let nome = "Maria"; // Aqui guardamos um texto (chamamos de "string")
    let gostaDePizza = true; // Aqui guardamos um valor verdadeiro ou falso (chamamos de "booleano")

    // Podemos usar essas variáveis assim:
    console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");
    if (gostaDePizza) {
      console.log("E eu adoro pizza!");
    }
  `,
  // ... (outros exemplos)
};

export const getExplanation = (word: string): string => {
  // ... (lógica para obter explicações)
};

export const getSuggestions = (prefix: string): string[] => {
  // ... (lógica para obter sugestões)
};
```

## Como Recriar um Projeto Similar

1. **Configuração Inicial**:

1. Crie um novo projeto Next.js com TypeScript:

```plaintext
npx create-next-app@latest --typescript
```

2. Instale as dependências adicionais:

```plaintext
npm install @monaco-editor/react lucide-react @radix-ui/react-select
```

2. **Estrutura do Projeto**:

1. Organize seus componentes em `app/components/`
2. Crie utilitários em `app/utils/`
3. Use `app/page.tsx` como seu componente principal

3. **Estilização**:

1. Configure o Tailwind CSS (já incluído no create-next-app)
2. Use classes do Tailwind para estilização

4. **Funcionalidades Principais**:

1. Implemente o editor Monaco
2. Crie lógica para sugestões de código e explicações
3. Desenvolva componentes para exibir sugestões e explicações

5. **Dados e Lógica**:

1. Crie exemplos de código em `codeHelpers.ts`
2. Implemente funções para gerenciar sugestões e explicações

6. **Interatividade**:

1. Use hooks do React para gerenciar o estado
2. Implemente handlers para interações do usuário

7. **Otimização e Deploy**:

1. Otimize imagens e assets
2. Configure seu projeto para deploy (ex: Vercel, Netlify)

## Contribuição

Contribuições são bem-vindas! Por favor, leia o arquivo CONTRIBUTING.md (a ser criado) para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

