---
title: What Drives Hospitalization Charges?
short_title: Hospitalization charges
subtitle: Regression for explanation, and ANOVA across regions
description: OLS for inference on hospitalization charges, plus one-way ANOVA and Tukey HSD to test regional differences in viral load.
order: 5
featured: false
kind: Statistical analysis
date_label: Jan 2026
summary: >-
  Which patient factors move hospitalization charges, and does viral load
  really differ by region? This is regression used to explain, not to forecast.
problem: >-
  Understand which of age, smoking, viral load, severity and region are
  associated with higher charges, and which regional differences are real.
approach: >-
  Fitted OLS with one-hot-encoded categoricals and read coefficients and
  p-values rather than predictions. Ran a one-way ANOVA per variable across four
  regions, then a Tukey HSD on the variable that differed.
result: >-
  The model explains about 75% of the variance in charges (adj. R² 0.749).
  Smoking has by far the largest effect. Viral load differs by region
  (p < 0.001), and every regional pair differs except northeast–northwest.
metrics:
  - { value: "0.749", label: adjusted R² }
  - { value: "5 of 6", label: region pairs that differ (Tukey HSD) }
  - { value: "1,338", label: patients }
methods: [OLS for inference, One-hot encoding, One-way ANOVA, Tukey HSD, Correlation analysis]
stack: [Python, pandas, statsmodels, SciPy, seaborn]
links:
  repo: https://github.com/kartikpradyumna92/StrataScratch_data_projects/tree/main/Apollo_Hypothesis_analysis
---

## Framing

The dataset covers 1,338 patients. For each one it records age, sex, smoking
status, region, viral load, severity level and hospitalization charges. The goal
wasn't to predict charges. It was to **explain** them: which factors carry
weight, and how confident can we be? That makes this an inference problem, and
it changes what matters in the output. Coefficients, standard errors and
p-values matter more than a test-set score.

## What moves charges

Correlation first, as a sanity check. Smoking shows the strongest association
with charges (r ≈ 0.79), followed by age (0.30) and viral load (0.20).

{% include figure.html src="/assets/img/projects/hospital-charges-inference/correlation-heatmap.webp" w=915 h=675 alt="Lower-triangle correlation heatmap. The strongest cell is smoker_yes against hospitalization charges at 0.79. Age against charges is 0.3, viral load against charges is 0.2, and most other pairs are near zero." caption="Pairwise correlations after one-hot encoding. Smoking dominates the association with charges." %}

Then OLS (`statsmodels`), with the categoricals one-hot encoded:

| Variable | Coefficient | p-value |
|---|---:|---:|
| Smoker (yes) | **+59,620** | < 0.001 |
| Viral load (per unit) | +2,547 | < 0.001 |
| Severity level (per level) | +1,185 | < 0.001 |
| Age (per year) | +643 | < 0.001 |

With **adjusted R² of 0.749** and F = 445, the model explains about three
quarters of the variance. Holding the other factors fixed, smokers carry about
59.6k more in charges.

## Does viral load differ by region?

I ran a one-way ANOVA across the four regions for age, severity and viral load.

- **Age:** no difference (p = 0.97)
- **Severity:** no difference (p = 0.54)
- **Viral load:** differs (p ≈ 2 × 10⁻²⁴)

ANOVA only says *some* region differs, so **Tukey's HSD** located which pairs
do. Every pair differs significantly **except northeast vs. northwest**.
Southeast has the highest mean viral load (11.1), about 1.4 units above the
two northern regions.
