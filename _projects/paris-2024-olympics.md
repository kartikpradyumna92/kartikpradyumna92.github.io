---
title: Paris 2024 Olympics
short_title: Paris 2024 Olympics
subtitle: Statistical inference and visual storytelling across 10k+ athletes
description: Welch’s t-test and a chi-square test of independence on Paris 2024 Olympics data, with interactive Plotly storytelling.
order: 4
featured: false
kind: Statistical analysis
date_label: Oct 2024
summary: >-
  Do male and female athletes differ in age? Does the medal an athlete wins
  depend on the country they represent? I tested both and told the story
  visually.
problem: >-
  Describe a large, multi-table event dataset from several points of view and
  separate real differences from noise.
approach: >-
  Explored the data from five points of view: schedule, events, athletes,
  medals and a single athlete. Tested mean age by gender with Welch’s t-test,
  and country vs. medal type with a chi-square test of independence.
result: >-
  Mean age differs by gender (t = 7.19, p < 0.001). Country and medal type are
  not independent (chi-square, p < 0.001).
metrics:
  - { value: "10k+", label: athletes }
  - { value: "p < 0.001", label: "age by gender (Welch’s t)" }
  - { value: "p < 0.001", label: "country × medal (χ²)" }
methods: [Welch’s t-test, Chi-square test of independence, Descriptive statistics, Interactive visualization]
stack: [Python, pandas, SciPy, Plotly]
links:
  repo: https://github.com/kartikpradyumna92/paris2024-olympics-analysis
  kaggle: https://www.kaggle.com/code/kartikpradyumna92/olympics-2024-statistical-and-visual-analysis
  dataset: https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games
---

## Approach

The Kaggle dataset covers the Paris 2024 schedule, events, athletes and
medallists. Rather than one long exploration, I looked at it from five points of
view and asked what each could answer: **schedule, events, athletes, medals and
one athlete** (Novak Djokovic's run to his first Olympic gold).

## Two tests

**Do male and female athletes differ in age?** Age distributions by gender look
similar in shape, so I tested the means directly with **Welch's t-test**, which
allows for unequal variances.

- H₀: mean age of male athletes = mean age of female athletes.
- **t = 7.19, p ≈ 6.7 × 10⁻¹³.** The means differ.

{% include figure.html src="/assets/img/projects/paris-2024-olympics/violin-chart-athletes-age-per-gender.webp" w=1005 h=525 alt="Violin plots of athlete age for female and male athletes. The two distributions are similar in shape, both centered in the mid-20s with long right tails." caption="Athlete age by gender. The shapes are similar, but the difference in means is significant." %}

**Is the type of medal won independent of country?** I used a **chi-square test
of independence** on country × medal type (gold, silver, bronze).

- H₀: country and medal type are independent.
- **p ≈ 2.7 × 10⁻⁴⁰.** The country an athlete represents is associated with the type of medal they win.

## Selected findings

- Athletes ranged from **12 to 70 years old**. China's team had notably low age variance (12 to 37).
- Athletics has the most events and athletes, because it bundles all track and field. Swimming comes second.
- Among the ten largest delegations, several had more female than male athletes, even though male athletes outnumbered female athletes overall.
- The daily schedule front-loads events, as early rounds narrow toward finals. Basketball's schedule tracks the overall pattern closely.

{% include figure.html src="/assets/img/projects/paris-2024-olympics/sub-plot-country-level.webp" w=1005 h=525 alt="Two panels for the ten largest delegations. Left: athlete counts by gender, with China, Australia, the United States and Canada fielding noticeably more women than men. Right: age distributions by country, with China's the narrowest." caption="The ten largest delegations: gender balance (left) and age spread (right)." %}

{% include figure.html src="/assets/img/projects/paris-2024-olympics/gold-medalists-summary.webp" w=1005 h=525 alt="Three bar charts ranking gold medals by country, by discipline and by individual athlete." caption="Gold medals ranked by country, discipline and athlete." %}

{% include figure.html src="/assets/img/projects/paris-2024-olympics/novak-djokovic-journey.webp" w=1200 h=500 alt="Scatter plot of Novak Djokovic's six matches by date and round, from the first round against Matthew Ebden to the gold medal match against Carlos Alcaraz." caption="One athlete's view: Djokovic's path to gold, round by round." %}

The interactive Plotly versions of these charts are in the Kaggle notebook.
