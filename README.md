# Guilherme Bueno Reis - Portfolio

Portfólio pessoal de Guilherme Bueno Reis, Desenvolvedor Fullstack, criado para apresentar projetos, trajetória profissional, stack técnica, certificações e canais de contato.

O projeto tem foco em React, TypeScript, Node.js, interfaces modernas e aplicações web performáticas.

## About

Este portfólio reúne uma visão prática da minha atuação como desenvolvedor fullstack. A aplicação apresenta projetos reais e acadêmicos, experiência profissional, formação, stack de desenvolvimento e uma área de contato para novas oportunidades.

A interface foi construída com uma estética escura por padrão, suporte a tema claro/sistema, navegação responsiva e páginas organizadas por domínio.

## Preview

URL configurada nos metadados do projeto:

[https://guilherme-reis.vercel.app](https://guilherme-reis.vercel.app)

Assets públicos disponíveis no projeto:

- `public/favicon.svg`
- `public/favicon.ico`
- `public/robots.txt`
- `public/curriculo-guilherme-reis.pdf`

## Features

- Página inicial com hero, chamadas para projetos e contato.
- Listagem de projetos com filtro por categoria: trabalho, projeto pessoal e faculdade.
- Seção de projetos em destaque.
- Página de experiência com trajetória profissional, formação acadêmica e certificações.
- Página de stack com visão técnica de frontend, backend, infraestrutura, arquitetura e ferramentas.
- Página sobre com história, visão de produto, foco técnico e filosofia de desenvolvimento.
- Página de contato com e-mail, Gmail, WhatsApp, GitHub e LinkedIn.
- Layout responsivo com header desktop e navegação inferior para mobile.
- Alternância de tema entre claro, escuro e sistema.
- Animações de entrada com Motion.
- Metadados de SEO, Open Graph, Twitter Card, canonical URL e `robots.txt`.

## Technologies

Principais tecnologias e ferramentas presentes no projeto:

- React 19
- React DOM 19
- TypeScript 6
- Vite 8
- TanStack Start
- TanStack Router
- TanStack Router Devtools
- Tailwind CSS v4
- Motion
- Lucide React
- Nitro
- Biome
- Vitest
- Testing Library
- jsdom
- clsx
- tailwind-merge
- class-variance-authority

O projeto também possui configuração compatível com componentes no estilo shadcn/ui por meio do arquivo `components.json`.

## Certifications

- HTTP e Performance
- Aprofundando em Hooks
- Interfaces, Navegação e Armazenamento local
- Node.js
- Fundamentos de Java

## Getting Started

Este projeto usa `pnpm`, conforme indicado pelo arquivo `pnpm-lock.yaml`.

Instale as dependências:

```bash
pnpm install
```

Rode o servidor de desenvolvimento:

```bash
pnpm dev
```

Por padrão, o script de desenvolvimento usa a porta `3000`:

```bash
http://localhost:3000
```

Para gerar a build de produção:

```bash
pnpm build
```

Para visualizar a build:

```bash
pnpm preview
```

## Scripts

Scripts disponíveis no `package.json`:

| Script | Comando | Descrição |
| --- | --- | --- |
| `dev` | `vite dev --port 3000` | Inicia o servidor de desenvolvimento. |
| `generate-routes` | `tsr generate` | Gera a árvore de rotas do TanStack Router. |
| `build` | `vite build` | Cria a build de produção. |
| `preview` | `vite preview` | Executa o preview da build. |
| `test` | `vitest run` | Executa os testes com Vitest. |
| `format` | `biome format` | Formata os arquivos com Biome. |
| `lint` | `biome lint` | Executa o lint com Biome. |
| `check` | `biome check` | Executa verificações do Biome. |

## Project Structure

Resumo da estrutura principal do projeto:

```txt
src/
  app/
    providers/          # Providers globais da aplicação
  components/
    layout/             # Header, footer, layout principal e navegação mobile
    ui/                 # Componentes visuais reutilizáveis
  features/
    about/              # Seções e dados da página Sobre
    contact/            # Componentes e dados de contato
    experience/         # Experiência, trajetória, formação e certificações
    portfolio/          # Hero principal do portfólio
    projects/           # Cards, grid, filtros e dados dos projetos
    stack/              # Seções e dados da stack técnica
  lib/
    utils/              # Utilitários compartilhados
  pages/                # Composição das páginas
  routes/               # Rotas file-based do TanStack Router
  styles/
    globals.css         # Tema visual, tokens e estilos globais
```

Arquivos de configuração relevantes:

- `vite.config.ts`
- `tsconfig.json`
- `biome.json`
- `tsr.config.json`
- `components.json`

## Routes

Rotas principais encontradas em `src/routes`:

- `/` - página inicial
- `/projects` - projetos
- `/experience` - experiência e formação
- `/stack` - stack técnica
- `/about` - sobre
- `/contact` - contato

## Performance and SEO

O projeto inclui alguns cuidados coerentes com performance, SEO e experiência de uso:

- Rotas com `defaultPreload: "intent"` no TanStack Router.
- Restauração de scroll habilitada no roteador.
- Carregamento assíncrono de seções da home com `React.lazy` e `Suspense`.
- Metadados globais com title, description, robots, author e theme color.
- Tags Open Graph e Twitter Card configuradas.
- Canonical URL definida.
- Preconnect para Google Fonts.
- `robots.txt` público.
- Layout responsivo para desktop e mobile.
- Respeito a `prefers-reduced-motion` nos estilos globais.

## Contact

Canais de contato encontrados no código:

- E-mail: [guilhermebuenoreis.contact@gmail.com](mailto:guilhermebuenoreis.contact@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio)
- GitHub: [GuilhermeBuenoReis](https://github.com/GuilhermeBuenoReis)
- LinkedIn: [guilherme-bueno-reis](https://www.linkedin.com/in/guilherme-bueno-reis)
- Instagram: [devguilherme_bueno](https://www.instagram.com/devguilherme_bueno/)
- WhatsApp: [abrir conversa](https://wa.me/5542988663891?text=Ol%C3%A1%20Guilherme%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.)

## Notes

- Este repositório está marcado como `private` no `package.json`.
- Nenhuma licença foi declarada no projeto.
- Não há screenshot versionado no repositório.
