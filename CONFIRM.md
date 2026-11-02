# Items to confirm before launch

Everything below is **live on the site as written** (except where noted), because `site-content.md` marks it `[CONFIRM]`. The marker itself is never rendered, and a post-build check (`scripts/check-copy.mjs`) fails the build if "TO CONFIRM" or "[CONFIRM]" ever reaches the HTML.

To change any value, edit `src/data/content.en.ts`, `src/data/content.ar.ts` or `src/data/cases.ts`, then rebuild.

---

## 1. Figures marked [CONFIRM] in site-content.md

| # | Where it appears | Content as published | File |
|---|---|---|---|
| 1 | Hero stat chips | **SAR 24M+** single-brand revenue | `content.*.ts` → `hero.chips` |
| 2 | About stats | ~~4 Markets~~ → no number, see section 2 | `content.*.ts` → `about.stats` |
| 3 | AI in Growth, 01 (Problem) | Manual production caps testing at **5–10 variants per week** | `content.*.ts` → `ai.items[0]` |
| 4 | AI in Growth, 01 (How it works) | **30–50** brief-ready variants weekly; briefs generated from **Mixpanel** drop-off signals | `content.*.ts` → `ai.items[0]` |
| 5 | AI in Growth, 02 (Problem) | Teams burn **6–10 hours a week** on reports | `content.*.ts` → `ai.items[1]` |
| 6 | AI in Growth, 03 (Problem) | Senior buyers spend **60%** of their time monitoring | `content.*.ts` → `ai.items[2]` |
| 7 | AI in Growth, closing line | "None of these are theoretical. Each one was built inside a live engagement, against a live P&L, under a real budget." | `content.*.ts` → `ai.closing` |
| 8 | Results | ~~4 Regional Markets~~ → no number, see section 2 | `content.*.ts` → `results.stats` |
| 9 | Results | **SAR 24M+** Peak Campaign Revenue, single-brand revenue in **11 months** | `content.*.ts` → `results.stats` |
| 10 | Strategic Sessions | Scarcity note: "Due to ongoing regional projects and leadership commitments, only a limited number of strategic sessions are available each month." | `content.*.ts` → `sessions.scarcity` |

## 2. Career ✅ resolved from the Executive Profile (2026)

Dates, titles and markets now come from `Sofy-Executive-Profile.pdf`, which you approved as a source. Changes from the original site-content.md:

- Every role now shows its period and title. Steps is shown as "2025 – Present" (Arabic: "منذ 2025").
- **Added** Infinity Corp: Country Manager & Head of Business Development, KSA, 2023–2025. It has no description because the profile gives none.
- **BirdMilk Advertising Agency** market changed from "KSA / EG" to **Egypt**.
- **Al-Jazeera Paints** market changed from "KSA" to **KSA · Egypt**.
- **Steps** market is now "Riyadh · KSA".
- The company name stays "Steps" (the profile says "Steps Saudi") to match the hero line "Currently leading Steps".

Arabic titles: العضو المنتدب، المدير القُطري، المدير القُطري ورئيس تطوير الأعمال، رئيس تطوير الأعمال، مدير تطوير الأعمال، مدير المبيعات، مسؤول أول تطوير أعمال المشاريع، مطوّر أعمال أول.

### ✅ Markets: no number

As you asked, market counts no longer show a number. They now lead with the Gulf (Saudi Arabia and the UAE) plus Egypt:

| Where | Now shows |
|---|---|
| Hero badge | KSA · UAE · EG, Multi-market |
| About stats | GCC + EG, Markets: Saudi Arabia · UAE · Egypt |
| Regional tagline | Egypt & the Gulf · One operator |
| Results stats | GCC + EG, Regional Markets: Saudi Arabia · UAE · Egypt, across the wider Gulf |
| Case Studies header | GCC + EG, Markets: KSA · UAE · Egypt & beyond (the case sample also includes Libya) |

The Libya filter and case study 07 (Libya) are unchanged.

## 3. Selected Clients

The whole block is marked [CONFIRM]:

Buffalo Burger, Juhayna, Edita Foods, Costa Coffee, Toyota, BYD, DAMAC, STC, QNB, Air Arabia, Radisson Blu, Saudi GEA, plus the note "Full roster spans 200+ brands".

Worth checking: the Case Studies page says "Client identities and brand names are kept confidential." Please make sure you have permission to name these brands publicly, and that none of them can be matched to a specific anonymized case study.

## 4. Case study headlines

| Case | Headline as published | Note |
|---|---|---|
| 01 Consumer Electronics Retailer | **SAR 8M in 6 months** | ⚠️ **Inconsistent:** the metrics show **SAR 2.96M** revenue. Either the headline or the metric needs correcting. |
| 02 Perfume Brand | SAR 24M+ in 11 months | Same figure as the hero and Results stats. |
| 04 Gen-Z Fashion Brand | SAR 3.2M · 5,000+ orders | |
| 05 Fashion Brand | 6.49x average ROAS across the operation | |
| 07 Cosmetics Brand (Libya) | EGP 5M+ via messaging-led conversion | Market is Libya but the figure is in EGP. Please confirm the currency. |
| 10 Education Academy (GCC) | 5.29M impressions · 1.13M reach | Spend is shown as EGP 290K for a GCC campaign. Please confirm the currency. |
| 14 Quick-Service Restaurant Chain | 250 influencers, one drive-thru moment, two hours | |
| 16 Toys & Kids Retailer | 750 influencers, 4 days, one message: "we're in KSA" | |

## 5. Hidden until confirmed

- **"How the session works"** (Duration, Cost, Format, What you get). The source says to hide this block until confirmed, so it is **not rendered**. Send the four values and it can be added above the intake form.

---

## 6. Decisions I made that you should review

These were not specified in `site-content.md`:

1. **Budget range (intake form, step 2)** is a free-text field, because the source gives no ranges. If you want fixed options (for example SAR bands), send them and it will become a choice list.
2. **Form microcopy** that isn't in the source: button labels ("Continue", "Back", "Submit application"), "Step 1 of 3", the form title "Apply for a strategic session", validation and error text, and the success message ("Thank you. I review every application personally and will reply by email or WhatsApp."). Same for the Arabic equivalents.
3. **"How it works"** is the label used for the "Detail" field in the AI in Growth cards.
4. **Featured case studies on the home page:** 02, 07, 12, 03, 11, 13 (`FEATURED` in `src/data/cases.ts`).
5. **Case study filter tagging.** Multi-tagged where the category lists several, for example 13 Food Delivery is tagged KSA and GCC. 14 QSR is tagged Influencer Marketing (discipline) and F&B (industry). 15, 16 and 17 are tagged Retail.
6. **Arabic translation.** Professional Gulf-friendly MSA throughout. Brand and company names stay in Latin script, except Al-Jazeera Paints → دهانات الجزيرة. Figures stay as Latin numerals ("13x", "SAR 24M+") for consistency with ad-platform reporting. A native-speaker read is recommended.
7. **Site URL.** On Netlify the site uses Netlify's own `URL` variable automatically. Set `SITE_URL` once you have a custom domain (see README).
8. **Executive Profile PDF.** Its cover still lists the old website, `sofy.lovable.app`. Update the link in the PDF once the new domain is live.
