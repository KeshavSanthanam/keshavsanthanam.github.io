---
layout: post
title: Financial Modeling for Acquisition Analysis
tags: [eta-fundamentals]
author: Keshav Santhanam
---

Building a repeatable framework for evaluating deal economics:

## Core Model Components

**Inputs**
- Purchase price and transaction costs
- Financing structure (equity, SBA loan, seller note)
- Historical financials (3 years minimum)
- Normalized EBITDA/SDE
- Working capital requirements

**Operating Assumptions**
- Revenue growth (be conservative: 3-5% for mature business)
- Gross margin evolution
- Operating expense growth (usually grows with revenue)
- CapEx requirements (maintenance vs growth)
- Working capital changes

**Outputs**
- Cash flow to equity (what you actually take home)
- Debt service coverage ratio (DSCR)
- Return on invested capital (ROIC)
- Multiple on invested capital at exit (MOIC)
- IRR under various scenarios

## The Unit Economics Check

Before building full model, validate unit economics make sense:

**Service Business Example**
- Revenue per employee: $150-200K typical for B2B services
- Gross margin: 40-50% after direct labor
- Operating margin: 15-25% EBITDA
- Revenue per customer: Enough to support CAC payback <12 months?

**Product/Distribution Business**
- Gross margin: 30-40% typical
- Inventory turns: 4-6x annually is healthy
- Operating margin: 10-20% EBITDA
- Working capital intensity: 15-25% of revenue

If unit economics are way off from industry benchmarks, dig deeper.

## SBA Loan Modeling (Most Common Structure)

**Typical SBA 7(a) Terms**
- Up to 90% financing (10% down payment)
- Max loan: $5M
- Interest rate: Prime + 2.75% (currently ~10-11%)
- Term: 10 years
- Monthly payments (principal + interest)

**DSCR Requirement**
- Lenders want 1.25x minimum (preferably 1.5x)
- DSCR = (EBITDA - Taxes - CapEx) / (Principal + Interest)
- If DSCR <1.25x, you'll need more equity or seller note

**Example Deal Math**
- Purchase price: $2.5M
- SBA loan: $2.25M (90%)
- Equity: $250K (10%)
- EBITDA: $550K
- Annual debt service: $350K
- DSCR: ($550K - $55K taxes - $50K CapEx) / $350K = 1.27x
- Cash to owner after debt: ~$95K in year 1

## Seller Note as Financing Bridge

**Why Seller Notes Help**
- Reduces equity required from buyer
- Shows seller confidence in business
- Often has flexible terms (interest-only, subordinated to SBA)

**Typical Terms**
- 10-20% of purchase price
- 5-7 year term
- Interest only for 2-3 years, then amortizing
- Subordinated to senior debt (SBA)

**Example Deal with Seller Note**
- Purchase price: $2.5M
- SBA loan: $2.0M (80%)
- Seller note: $300K (12%)
- Equity: $200K (8%)
- Reduces equity by $50K, improves cash-on-cash return

## Scenario Analysis (Always Run 3 Cases)

**Base Case (50% Probability)**
- Flat to modest revenue growth (0-3%)
- Margins stable
- No major surprises
- Goal: 15-20% cash-on-cash return

**Downside Case (30% Probability)**
- Revenue decline (5-10%)
- Margin compression
- Key customer loss or other issue
- Goal: Still cover debt service, don't lose money

**Upside Case (20% Probability)**
- Operational improvements kick in
- Revenue growth 7-10%
- Margin expansion
- Goal: 25-30%+ cash-on-cash return

## Red Flags in the Model

**Deal Doesn't Pencil Without Heroic Assumptions**
- Need >10% revenue growth to make returns work
- Assuming major margin expansion (200+ bps)
- CapEx way below depreciation (deferred maintenance)
- DSCR <1.25x even with optimistic assumptions

**Working Capital Trap**
- Fast-growing business that consumes cash
- Seasonal business with massive WC swings
- Model shows growth but no free cash flow

**Refinancing Risk**
- Seller note balloon payment that requires refinancing
- Assuming you can refi at lower rate (rates might be higher)
- Counting on asset sale to fund debt paydown

## My Model Checklist

- [ ] Historical financials reconcile to tax returns
- [ ] Normalized EBITDA/SDE clearly documented with adjustments
- [ ] Revenue growth assumption defensible (ideally conservative)
- [ ] CapEx based on industry norms and asset condition
- [ ] Working capital changes modeled (not just assumed flat)
- [ ] Debt service coverage >1.25x in base case
- [ ] Downside case still serviceable (maybe tight, but not default)
- [ ] Returns attractive even in base case (not just upside)
- [ ] Exit assumptions reasonable (multiple, timing)

## Simple Metrics I Calculate First

**Cash-on-Cash Return (Year 1)**
- Cash flow to equity / Total equity invested
- Target: >20% in year 1 (after debt service)

**Payback Period**
- How many years to return initial equity investment?
- Target: <5 years

**Equity Value Creation**
- Assumed exit value (EBITDA growth + multiple expansion)
- Minus remaining debt
- Equals equity value
- Target: 2-3x equity in 5 years

## Key Insight

Model is only as good as assumptions. Garbage in, garbage out. I focus on making defensible, conservative assumptions in base case. If deal still looks good with boring assumptions, it's worth pursuing. If it requires perfect execution and market tailwinds to work, pass. There are enough good deals that don't require heroics.
