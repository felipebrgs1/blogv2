---
title: "Next.js vs Vinext: comparação prática de build e bundling"
description: "Uma arquitetura simples para publicar posts em Markdown com performance alta."
date: 2026-02-18
author: "Felipe Borgaco"
category: "Systems"
tags: ["Code", "Frontend", "Backend"]
coverImage: "./images/vinext-owl.webp"
---

Fiz uma análise comparativa prática entre Next.js 16.1.6 (com Turbopack) e Vinext(0.0.16), o novo framework da Cloudflare que reimplementa a API do Next.js sobre Vite + Rolldown.
Limpei todas as caches (.next e dist) e rodei os builds em projetos equivalentes, comparando apenas o código JS/CSS gerado pelo bundler (excluí assets estáticos da pasta public).

**Resultados:**

- Tempo de build: ~5-6 segundos no Next.js contra 1.3 segundos no Vinext(usando vite8-beta).
- A diferença arquitetural fica clara na estratégia de chunking:
- Next.js gera dezenas de chunks pequenos (ótimo para cache granular e lazy loading preciso).
- Vinext faz bundling mais agressivo (melhor tree-shaking global e parsing mais eficiente no navegador, mas invalidação de cache mais ampla em updates).

![Comparativo de build e client-side entre Next.js e Vinext](./images/vinext-build-client.webp)

**Outros pontos que observei:**

- O output do servidor no Vinext é bem mais enxuto e padronizado, o que facilita deploy em Docker, AWS ECS, DigitalOcean, Cloudflare Workers ou qualquer VPS sem dependências específicas da Vercel.
- Compatibilidade quase total com o ecossistema Vite (exceto Next/font, Next/images e outros relacionados diretamente com a vercel).
- HMR mais maduro e previsível em projetos maiores.

![Comparativo de chunks server-side entre Next.js e Vinext](./images/vinext-build-server.webp)

O Next.js continua extremamente sólido, principalmente se você já está dentro do ecossistema Vercel. O Vinext (lançado há poucos dias) ainda é experimental, mas entrega um footprint bem menor e mais liberdade de vendor lock-in.
hashtag#NextJS hashtag#Vite hashtag#React hashtag#WebPerformance hashtag#Cloudflare hashtag#Vinext
