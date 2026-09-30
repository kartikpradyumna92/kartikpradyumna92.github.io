---
title: Did the Ad Campaign Work?
short_title: Marketing ad A/B test
subtitle: A/B test of ad vs. public-service-announcement exposure on 588k users
description: A two-proportion A/B test on 588k users. Design checks first, then a z-test, a confidence interval and a practical-significance readout.
order: 1
featured: true
kind: Experiment
date_label: Aug 2026
summary: >-
  An ad campaign ran against a PSA control group. I checked the design first,
  then quantified how much conversion the ads caused.
problem: >-
  Marketing needed two answers: should the campaign roll out more widely, and
  how much of the conversion can be attributed to the ads rather than chance?
approach: >-
  Validated the data before testing: no duplicate users, a 96/4 split that is
  plausibly deliberate but can’t be SRM-tested without a documented ratio, and
  enough power despite a 24:1 imbalance. Then ran a two-sided two-proportion
  z-test with a Wald 95% CI on the difference.
result: >-
  Ads converted at 2.55% vs 1.79% for PSA: +0.77 pp absolute, +43% relative
  (z = 7.37, p < 0.001). The 95% CI of 0.60–0.94 pp excludes zero, which works
  out to about 7.7 extra conversions per 1,000 users.
metrics:
  - { value: "+43.1%", label: relative lift }
  - { value: "+0.77 pp", label: "absolute lift (CI 0.60–0.94)" }
  - { value: "588k", label: users }
methods: [Hypothesis framing, Allocation / SRM reasoning, Power analysis, Two-proportion z-test, Wald CI]
stack: [Python, pandas, statsmodels, SciPy, seaborn]
figure: ab-test
links:
  repo: https://github.com/kartikpradyumna92/marketing-ads-ab-test
  kaggle: https://www.kaggle.com/code/kartikpradyumna92/ad-vs-psa-conversion-ab-testing-ipynb
  dataset: https://www.kaggle.com/datasets/faviovaz/marketing-ab-testing
---

## The question

A company ran an advertising campaign. Most users saw the ad, and a control
group saw a public service announcement (PSA) in the same placement. The
campaign owners wanted to know two things:

1. **Would the campaign be successful?** Should it roll out more widely, or is a PSA (no ad) just as good?
2. **If so, how much of that success can be attributed to the ads?**

I framed both as one hypothesis test on a single primary metric, **conversion**.
The first answers "did it work?" and the size of the effect answers "how much?".

## The data

| Group | Users | Converted | Rate |
|---|---:|---:|---:|
| Ad (treatment) | 564,577 | 14,423 | **2.55%** |
| PSA (control) | 23,524 | 420 | **1.79%** |

Each row is one user, recording whether they converted, how many ads they saw,
and the day and hour they saw the most ads.

## Checking the design before the test

A p-value is only as good as the design behind it, so I checked three things
before testing anything.

- **Duplicates.** No user ID appears more than once, so no user is counted in both arms.
- **Allocation.** The split is 96% ad / 4% PSA. That could be deliberate, since showing a PSA instead of an ad costs revenue. It could also be an assignment bug. The very clean ratio and the opportunity cost both point to deliberate. But the intended ratio isn't documented, so a formal **sample-ratio-mismatch (SRM)** test isn't possible. I recorded this as an assumption, not a finding.
- **Power.** A 24:1 imbalance reduces power relative to an even split. The power check confirmed the smaller arm (23,524 users) was still large enough to detect an effect of this size, so a null result wouldn't have been a false negative.

## The test

- **H₀:** showing ads does not change the conversion rate.
- **H₁:** showing ads changes the conversion rate. The business hypothesis is directional, but I ran a **two-sided** test, which is the more conservative choice.

The test is a two-proportion z-test (`statsmodels.proportions_ztest`) with a
Wald 95% confidence interval on the difference (`confint_proportions_2indep`).

{% include figures/ab-test.html detail=true %}

## Reading the result

| Measure | Value |
|---|---|
| z-statistic | **7.37**, well past the ±1.96 critical value |
| p-value | ≈ 1.7 × 10⁻¹³ |
| Absolute lift | **+0.77 percentage points** |
| 95% CI for the difference | **0.60 pp to 0.94 pp**, excluding zero |
| Relative lift | **+43.1%** |

**Statistical significance:** the gap is very unlikely to be chance.
**Practical significance:** the absolute gap looks small, but it means about
**7.7 additional conversions per 1,000 users** shown the ad instead of the PSA.

**Answers to the two questions:** yes, the campaign drove a statistically and
practically meaningful lift. With 95% confidence, the ads account for between
0.60 and 0.94 percentage points of additional conversion.

## Figures from the notebook

{% include figure.html src="/assets/img/projects/marketing-ad-ab-test/conversion-rate.webp" w=691 h=469 alt="Bar chart of conversion rate by group: ad 2.55%, PSA 1.79%." caption="Conversion rate by test group." %}

{% include figure.html src="/assets/img/projects/marketing-ad-ab-test/z-test.webp" w=858 h=469 alt="Standard normal curve with shaded two-tailed rejection regions and a dashed line at the observed z-statistic of 7.37, far in the right tail." caption="The observed z-statistic against the two-tailed rejection regions at α = 0.05." %}

## What I'd add next

- **Revenue, not just conversion.** Rolling out depends on what a conversion is worth versus the campaign's cost, and this dataset doesn't include either.
- **A documented allocation ratio,** so SRM can be tested rather than assumed.
- **Time-based checks.** With exposure dates, I'd look for novelty effects before trusting a steady-state lift.
