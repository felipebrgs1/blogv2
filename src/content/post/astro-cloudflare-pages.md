---
title: "Astro + Cloudflare Pages para blog de conteúdo"
description: "Uma arquitetura simples para publicar posts em Markdown com performance alta."
date: 2026-02-18
author: "Felipe Borges"
category: "Systems"
tags: ["Astro", "Cloudflare", "Jamstack"]
readingTime: "6 min read"
coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
---

Astro é uma boa escolha para blog porque entrega HTML estático por padrão e deixa hidratação para os pontos realmente interativos.

## Estrutura recomendada

- Posts em `src/content/post/*.md`
- Frontmatter com metadados obrigatórios
- Rotas estáticas em `/post/[slug]`

Com essa organização, cada novo artigo é só um arquivo Markdown novo, sem necessidade de tocar no código de página.

## Deploy no Pages

No Cloudflare Pages, basta buildar o projeto e publicar a pasta `dist`. Em projetos Astro estáticos, isso costuma funcionar sem ajustes extras.
