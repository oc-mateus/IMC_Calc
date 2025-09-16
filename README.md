# Calculadora de IMC

Uma calculadora de Índice de Massa Corporal (IMC) moderna e responsiva desenvolvida com React, Vite e Tailwind CSS.

![Calculadora de IMC](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-cyan)

## 📋 Sobre o Projeto

Esta aplicação web permite que usuários calculem seu Índice de Massa Corporal (IMC) informando peso e altura. O sistema exibe o valor calculado do IMC e a classificação correspondente de acordo com os parâmetros estabelecidos pela Organização Mundial da Saúde (OMS).

### Funcionalidades

- ✅ Cálculo automático do IMC
- ✅ Classificação do resultado (Abaixo do peso, Peso normal, Sobrepeso, Obesidade)
- ✅ Interface moderna e responsiva
- ✅ Animações e transições suaves
- ✅ Design com gradientes e efeitos de glassmorphism
- ✅ Validação de entrada de dados
- ✅ Barra visual de progresso do IMC
- ✅ Informações educativas sobre IMC

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interface do usuário
- **Vite** - Ferramenta de build e desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript** - Linguagem de programação
- **Git** - Controle de versão

## 📦 Instalação e Execução

Siga os passos abaixo para executar o projeto em sua máquina local:

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/oc-mateus/IMC_Calc.git
cd IMC_Calc
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador e acesse:
```
http://localhost:5173
```

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

## 🎯 Como Usar

1. Informe seu peso em kilogramas (ex: 70.5)
2. Informe sua altura em metros (ex: 1.75)
3. Clique no botão "Calcular IMC"
4. Visualize seu resultado e classificação

### Classificações do IMC

- **Abaixo de 18.5** → Abaixo do peso
- **18.5 a 24.9** → Peso normal
- **25.0 a 29.9** → Sobrepeso
- **30.0 ou mais** → Obesidade

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js          # Cabeçalho com título e descrição
│   ├── InputForm.js       # Formulário de entrada de dados
│   └── Result.js          # Exibição dos resultados
├── App.js                 # Componente principal
├── main.jsx               # Ponto de entrada da aplicação
└── index.css              # Estilos globais e personalizações
```

## 🎨 Personalização

O projeto utiliza Tailwind CSS para estilização, permitindo fácil customização:

1. Modifique as cores editando as classes no arquivo `src/App.js`
2. Ajuste as animações no arquivo `src/index.css`
3. Altere o tema modificando as configurações no `tailwind.config.js`

## 📱 Responsividade

A aplicação é totalmente responsiva e adapta-se a diferentes tamanhos de tela:

- 📱 Mobile (320px+)
- 📟 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Mateus C. - [@oc-mateus](https://github.com/oc-mateus) - mateusnegocios.com@gmail.com

Link do Projeto: [https://github.com/oc-mateus/IMC_Calc](https://github.com/oc-mateus/IMC_Calc)

## 🙌 Agradecimentos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ícones Heroicons](https://heroicons.com/)

---

**Nota**: Esta calculadora de IMC fornece uma estimativa geral. Para uma avaliação médica completa, consulte sempre um profissional de saúde.
