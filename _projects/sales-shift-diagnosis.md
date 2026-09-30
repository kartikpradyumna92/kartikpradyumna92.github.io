---
title: What Changed on April 29?
short_title: Sales-shift diagnosis
subtitle: Diagnosing a sudden jump in daily sales
description: Locating a structural break in daily sales, testing it, and showing it came from a shift in who was buying.
order: 2
featured: true
kind: Metric diagnosis
date_label: Jan 2026
summary: >-
  Daily sales jumped about 39% overnight and stayed there. I confirmed the break
  was real, then showed it came from a change in who was buying.
problem: >-
  A store’s daily sales stepped up partway through a 50-week window. When did
  it happen, is the change real, and is it explained by a shift in the
  customer mix?
approach: >-
  Located the break with day-over-day differences, compared daily sales before
  and after it with Welch’s t-test, then tested whether the purchaser-gender
  mix shifted, using a two-proportion z-test.
result: >-
  The break came on 29 Apr 2013, when sales went from 458 to 732 overnight
  (t = −44.4, p < 0.001). Female share of sales fell from 64.8% to 39.8%. The
  jump came from male purchasers, while female purchases kept declining.
metrics:
  - { value: "504 → 703", label: average daily sales }
  - { value: "64.8% → 39.8%", label: female share of sales }
  - { value: "204k", label: transactions }
methods: [Change-point location, Welch’s t-test, Two-proportion z-test, Mix-shift decomposition, Daypart analysis]
stack: [Python, pandas, SciPy, statsmodels, seaborn]
figure: sales-shift
links:
  repo: https://github.com/kartikpradyumna92/StrataScratch_data_projects/tree/main/Sales_Data_Analysis
---

## The question

This is a take-home-style data project from StrataScratch. The dataset is 50
weeks of transactions from one store, with 204,329 sales between 1 October 2012
and 15 September 2013. Each row has a timestamp and the purchaser's gender.
Plotting daily sales shows an obvious step change, and the questions follow
from it:

1. When did the change happen?
2. Is it statistically significant?
3. Is it explained by a shift in the male/female mix of customers?
4. How are sales distributed across the day?

This is the same shape of problem as a product metric that moves overnight.
First establish that the change is real, then work out which segment moved.

## Finding the break

Taking day-over-day differences in daily sales, the largest absolute change
falls on **29 April 2013**, when sales went from 458 to 732 in a single day. The
level then holds: average daily sales are about **504 before** the break and
about **703 after**.

{% include figure.html src="/assets/img/projects/sales-shift-diagnosis/daily-sales.webp" w=1190 h=590 alt="Line chart of daily sales from October 2012 to September 2013, showing a step up from around 500 to around 700 sales per day at the end of April 2013." caption="Daily sales across all 50 weeks. The step at the end of April is the change being diagnosed." %}

## Is it real?

I compared daily sales before and after the break with **Welch's t-test**, which
doesn't assume equal variances:

- **H₀:** mean daily sales are the same before and after.
- **Result:** t = −44.4, p ≈ 10⁻¹³⁷. The change is not noise.

## What drove it?

Both genders show a bump on the day of the break, so I tested whether the
**composition** of sales had changed. The test was a two-proportion z-test on
the female share of sales, before vs. after.

{% include figures/sales-shift.html %}

| Share of sales | Before 29 Apr | From 29 Apr |
|---|---:|---:|
| Female | 64.8% | **39.8%** |
| Male | 35.2% | **60.2%** |

The mix shift is overwhelming (z ≈ −113, p ≈ 0). Breaking the same counts
down per day shows where the new volume came from. Male purchases went from
roughly **178 to 423 a day**. Female purchases went from about 327 to 280 a
day, continuing a decline visible across the whole year.

{% include figure.html src="/assets/img/projects/sales-shift-diagnosis/daily-sales-by-gender-stacked.webp" w=850 h=563 alt="Stacked area chart of daily sales by purchaser gender, with a dashed vertical line at 29 April 2013. The male band widens sharply after the line while the female band slowly shrinks." caption="Daily sales by purchaser gender, stacked. The dashed line marks 29 April 2013." %}

## When people buy

Splitting each day into four dayparts: **afternoon 39.4%**, morning 30.8%,
evening 20.9% and night 9.0% of all sales.

## What I'd check next

- **Rule out instrumentation first.** An overnight step that holds perfectly flat is also what a tracking or logging change looks like. Before crediting a campaign, I'd confirm nothing changed in how sales were recorded.
- **Find the cause, not just the break.** A before/after comparison proves that something changed, not why. The next step is to line the date up with launches, pricing, channels or promotions aimed at male customers.
- **Model the time series directly.** The t-test treats days as independent, but daily sales are autocorrelated and seasonal. An interrupted time-series model would give a more honest interval for the effect.
