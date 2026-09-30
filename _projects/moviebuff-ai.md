---
title: MovieBuff AI
short_title: MovieBuff AI
subtitle: An analytics dashboard and LLM agent on top of a Notion database
description: A Flask app pairing a viewing-analytics dashboard with an LLM agent that reads and writes a Notion database through tool calls and local embedding retrieval.
order: 3
featured: true
kind: Product build
date_label: Nov 2025 – 2026
summary: >-
  A personal movie tracker with an analytics dashboard and an AI agent that can
  query, rank and update the underlying Notion database through tool calls.
problem: >-
  A watchlist kept in Notion had grown into a real dataset of genres, languages,
  ratings and watch dates. It was hard to query, and sending the whole list
  to an LLM on every message would exceed free-tier token limits.
approach: >-
  Flask app with Notion as the system of record. Each chat message is embedded
  locally and matched against cached movie embeddings, so only the most relevant
  40 titles reach the prompt. An open-source model on Groq calls tools that act
  on the real data.
result: >-
  Three working surfaces, all synced live to Notion: My List (full CRUD), AI
  Chat and an Analytics tab. It runs behind a password gate and rate limiting,
  with an API test suite.
metrics:
  - { value: "3", label: "agent tools: query, add, update" }
  - { value: "40", label: titles of context per message }
  - { value: "0", label: external calls for retrieval }
methods: [Embedding retrieval, LLM tool calling, Data pipeline design, Dashboard metrics]
stack: [Python, Flask, Notion API, Groq, sentence-transformers, NumPy]
figure: moviebuff
links:
  repo: https://github.com/kartikpradyumna92/moviebuff-ai-agent
---

## What it does

MovieBuff turns a Notion database of films and shows into a small product with
three tabs:

| Tab | What it does |
|---|---|
| **My List** | Browse, search, filter, add, edit and delete entries, all synced live to Notion. Deletes are archived, so nothing is lost. |
| **AI Chat** | Recommendations, mood-based picks and watchlist questions. It can add or update entries when asked in plain language. |
| **Analytics** | Genre breakdown, language mix, year watched, movies vs. shows and rating distribution. |

## How a chat message is handled

{% include figures/moviebuff.html detail=true %}

## Design decisions

**Context is a budget.** Sending the full list with every message gets slower
and more expensive as the list grows, and it runs into Groq's free-tier
tokens-per-minute cap. Instead, each message is embedded locally with
`all-MiniLM-L6-v2` and compared by cosine similarity against a cached embedding
of every title. Only the 40 most relevant titles go into the prompt. Retrieval
costs no API calls, and prompt size stays flat however large the list gets.

**The data answers, not the model's memory.** Ranking or filtering questions,
like "my top-rated thrillers" or "what did I watch in 2024", go through a
`query_movies` tool that sorts and filters the real, current data. The model
reads that result instead of guessing. `add_movie` and `update_movie` write
back to Notion.

**Bounded agent loops.** A single turn can chain tool calls, for example
querying and then updating. It is capped at four rounds, so a confused model
can't loop.

**Production hygiene.** All configuration comes from environment variables and
secrets are never committed. A shared password protects every route, with a
constant-time comparison. The chat endpoint is rate-limited to 20 requests a
minute. A separate API test suite exercises the running app end to end.
