# Content confirmation list

Everything below is **live on the site as written** unless marked otherwise. The site never shows confirmation markers; a post-build check (`scripts/check-copy.mjs`) fails the build if "TO CONFIRM" or "[CONFIRM]" ever reaches the HTML.

Edit copy in `src/data/content.en.ts`, `src/data/content.ar.ts` and `src/data/cases.ts`, then rebuild.

**Sources used:** `site-content.md`, `Mostafa-Sofy-Executive-Profile.pdf` (2026), the repositioning brief, and your later instructions in this project (no market count; lead with Saudi Arabia, the UAE and Egypt).

---

## 1. New executive copy that needs your approval

| Where | Copy | Basis |
|---|---|---|
| Hero | "Marketing Leadership. Business Growth." / "Building teams, scaling businesses, and turning strategy into measurable impact." | Your brief, verbatim |
| Hero | "Managing Director, Steps · Riyadh" | Executive Profile: Steps Saudi, 2025 to present |
| Snapshot | **8+** Senior leadership roles | Executive Profile ("08+ senior leadership roles") |
| Snapshot | **KSA · UAE · EG**, "Gulf-focused, Egypt-rooted" | Your instruction. ⚠️ No UAE role appears in the career history; please confirm the UAE claim is accurate. |
| About intro | "…15+ years of operating experience across Saudi Arabia, the Gulf and Egypt" | Profile says "across Saudi Arabia and Egypt"; "the Gulf" follows your instruction |
| About | Paragraphs on background, Steps, Infinity Performance and Infinity Corp, and the quote "I build the operating systems that move brands from campaigns to compounding growth." | Executive Profile pages 2, 4 and 6 |
| About principles | Strategy that answers to the business / Teams built to perform / Systems that compound | Adapted from the profile's four operating pillars |
| Leadership & Expertise | Five pillars and their bullet points | Your brief. ⚠️ Confirm each bullet reflects real experience (for example "Resource planning", "Organizational alignment"). |
| Selected Impact | Six contribution statements | Executive Profile page 5 ("Leadership & Impact"), close to verbatim |
| Selected Impact | The six "My role" lines | My framing, written to separate your contribution from team or agency delivery. ⚠️ Please check each one. |
| Selected Impact note | "Campaign figures in the case studies come from live ad accounts and reflect the work of the teams and agencies involved." | Attribution safeguard from your brief |
| Leadership Philosophy | "Strategy creates direction. People create momentum. Execution creates impact." | Your brief |
| Leadership Philosophy | "Marketing is not about random campaigns. It's about building the right strategy…" | Executive Profile page 7, verbatim |
| Leadership Philosophy | Strategic clarity / People & culture / Disciplined execution, with one-line descriptions | Your reference mockup |
| Contact | "Explore the right opportunity." and the two path descriptions | Your brief and mockup |

## 2. Figures from site-content.md still marked [CONFIRM]

| Where | Content as published |
|---|---|
| Insights, AI perspective 01 | 5–10 variants per week; 30–50 brief-ready variants weekly; Mixpanel drop-off signals |
| Insights, AI perspective 02 | 6–10 hours a week on reports |
| Insights, AI perspective 03 | 60% of senior buyers' time on monitoring |
| Insights, closing line | "None of these are theoretical. Each one was built inside a live engagement…" |
| Case 01 | ⚠️ **Inconsistent:** headline says **SAR 8M in 6 months**, metric says **SAR 2.96M** revenue |
| Case 02 | SAR 24M+ in 11 months |
| Case 04 | SAR 3.2M · 5,000+ orders |
| Case 05 | 6.49x average ROAS across the operation |
| Case 07 | EGP 5M+ via messaging-led conversion. ⚠️ Libya market, EGP currency |
| Case 10 | 5.29M impressions · 1.13M reach. ⚠️ GCC market, EGP spend |
| Case 14 | 250 influencers, one drive-thru moment, two hours |
| Case 16 | 750 influencers, 4 days, "we're in KSA" |
| Selected brands (Impact section) | Buffalo Burger, Juhayna, Edita Foods, Costa Coffee, Toyota, BYD, DAMAC, STC, QNB, Air Arabia, Radisson Blu, Saudi GEA; "200+ brands". ⚠️ Confirm you may name them publicly, given the case studies are anonymized. |

## 3. Missing case-study detail (not shown on the site)

Your brief asks each case study to cover Business Context, Challenge, My Role, Strategic Approach, Execution and Business Impact. For all 18 cases only the context (market, category), an overview and the impact metrics exist. Pages show those and nothing else.

To add the missing parts, fill in the optional `challenge`, `role`, `approach` and `execution` fields (EN and AR) for any case in `src/data/cases.ts`. They appear on that case's page automatically.

## 4. Removed or relocated in the repositioning

| Item | What happened |
|---|---|
| "20+ Industries Served" | **Removed.** Unverified; the profile only says "multi-industry". Can be restored if confirmed. |
| 13x Peak ROAS and SAR 24M+ stats on the home page | Removed from the home page (campaign results, attribution unclear). Still shown in the case studies and on the Case Studies page. |
| Old Expertise (8 disciplines) | Merged into the five Leadership & Expertise pillars |
| AI in Growth section | Moved into Insights as the featured perspective, content unchanged |
| Operating Stack section | Moved into Leadership & Expertise, content unchanged |
| Regional section | Folded into About, Impact (Market Expansion) and the snapshot |
| Results section and industries marquee | Removed (covered by the snapshot and case studies) |
| Strategic Sessions intro, topics and 3-step form | Replaced by the two contact paths. The eight session topics are now the "Type of collaboration" options in the Strategic Partnership form. |
| Scarcity note ("By application · Limited availability…") | Removed: it read as freelancer positioning |
| FAQ | Kept, now inside the Contact section. ⚠️ Several answers still mention "strategic sessions"; tell me if you want them reworded. |

## 5. Images

- **Used:** studio headshot (hero), Riyadh night portrait (About), fashion, F&B and education covers (cases 15, 09 and 10). The baked-in text on the covers was blurred out, because it described work that isn't in the case studies (for example "Lead Generation / Dealer Performance").
- **Not used:**
  - The automotive cover: there is no automotive case study.
  - The 14-asset contact sheet (cityscapes, textures): the tiles are too low-resolution. Send the originals and they can be added.
  - The hand-on-chin portraits: the facial features look altered compared with your other photos. Your brief rules out AI-altered likenesses, so please confirm these are unedited before they are used.
- Cases without photography use a designed typographic cover.

## 6. Other

- **Insights** shows only real content: six editorial themes, the AI perspective in full, and a link to LinkedIn. No articles, dates or links were invented. Send articles when you have them.
- **Executive Profile PDF:** its cover still lists `sofy.lovable.app`. Update it once the new domain is live.
- **Arabic copy:** rewritten for the new structure in professional Gulf-friendly Arabic; a native read is recommended.
