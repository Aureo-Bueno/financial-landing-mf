# Planner Financeiro Mensal (Monorepo)

Este repositório contém o **app shell** e os **módulos remotos** do projeto de planejamento financeiro mensal, usando Vite + Module Federation.

## Estrutura

- `app-shell/` — aplicativo principal (host)
- `module-intro/` — módulo remoto de introdução
- `module-planning/` — módulo remoto de planejamento

## Requisitos

- Node.js 24+
- npm 11+

## Configuração

Instale as dependências em cada projeto:

```bash
cd app-shell && npm install
cd ../module-intro && npm install
cd ../module-planning && npm install
```

## Variáveis de ambiente (host)

No `app-shell/.env`:

```
VITE_REMOTE_INTRO_URL=http://localhost:4175/remoteEntry.js
VITE_REMOTE_PLANNING_URL=http://localhost:4176/remoteEntry.js
```

## Rodar em desenvolvimento

1) Inicie os remotes:

```bash
cd module-intro && npm run dev
cd ../module-planning && npm run dev
```

2) Inicie o host:

```bash
cd ../app-shell && npm run dev
```

A aplicação principal estará em `http://localhost:5173`.

## Build para produção

```bash
cd app-shell && npm run build
cd ../module-intro && npm run build
cd ../module-planning && npm run build
```

## Observações

- O host carrega os remotes via URLs configuradas no `.env`.
- Certifique-se de publicar os `remoteEntry.js` de cada módulo e atualizar as URLs no deploy.
