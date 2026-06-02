# 📈 AI Business Analyst & Venture Builder Challenge — „Förder-Radar"

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Hi 👋 — willkommen! Das hier ist ein echtes Stück Venture-Studio-Arbeit: **eine Idee in einer Woche auf Marktreife prüfen und verkaufsfähig machen — mit KI als Hebel.**

Es gibt keine Musterlösung, die du treffen musst. Wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Das Szenario

Unser Tech-Team baut einen Prototyp: **„Förder-Radar"** — ein KI-Assistent, der österreichischen Startups & KMU in Sekunden zeigt, welche Förderungen (FFG, aws, EU, Bundesländer…) zu ihnen passen, warum, und einen ersten Antrags-Absatz draftet. Deine Aufgabe: **Ist das ein Geschäft? Und wie bringen wir es an den Markt?**

Wir liefern dir als Orientierung ein Seed-Dataset (~20 Förderprogramme als JSON/CSV — die CSV öffnest du bequem in Excel/Sheets) + Beispiel-Profile. Dasselbe Dataset bekommt auch die Dev-Rolle. *Die Programme sind die Angebotsseite — deine zahlenden Kund:innen sind die Startups/KMU, die danach suchen; die Beispiel-Profile sind dein Ausgangspunkt fürs Sizing.*

> 📂 **Im Repo:** [`../data/`](../data/) — `programs.json` + `programs.csv` (Feld-Doku: [`../data/README.md`](../data/README.md)).

Für diese Analyse behandelst du Förder-Radar als eigenständiges, kommerzielles Venture — losgelöst vom (selbst nicht-kommerziellen, EU-geförderten) AI:AT-Kontext.

## Deine Deliverables (gedeckelt — wir bewerten Denken, nicht Folien-Design)

1. **Lean Canvas** für „Förder-Radar" (problem-first).
2. **1-Seiten-Business-Case** mit:
   - **Marktgröße bottom-up** (Zielkunden × Preis × Conversion). *Bitte kein „1% von einem Riesenmarkt"* — z.B. *5.000 erreichbare Ziel-KMU × €40/Monat × 3 % Conversion*; eine hergeleitete Zahl schlägt eine große Zahl ohne Herleitung.
   - **Grobe Unit Economics** (CAC, ARPU/LTV, Payback). *Kurz: Was kostet ein:e Kund:in (CAC) vs. was bringt sie (ARPU pro Monat, LTV über die Lebensdauer), und nach wie vielen Monaten ist der CAC zurückverdient (Payback)? Grobe, begründete Schätzungen genügen.*
   - **Die riskanteste Annahme benannt + ein billiger Test dafür.**
3. **ICP + Value Proposition** für **ein** Segment. Markiere jede Annahme als *validiert* oder *Hypothese*. (Bonus: 2–3 echte Mini-Gespräche mit Zielkund:innen oder ein schneller Landing-Page-Smoke-Test.)
4. **Marketing-Mini-Brief:** ein ICP, ein Kanal, **3 hypothetische Ads** (Headline + Body + Visual-Idee) + ein **Landing-Page-Hero** (Headline, Subhead, CTA, 3 Value-Bullets) + eine **Mess-Zeile pro Asset** („Erfolg = …").

### ⭐ Optionaler Stretch (so glänzt du)
Bau eine **lauffähige Mini-Automation** (n8n, Make, Zapier oder ein Custom-GPT), die einen Teil *deiner eigenen* Arbeit erledigt hat — z.B. Markt-/Wettbewerbs-Recherche, Generierung von Ad-Varianten, Auswertung von Umfrage-Daten. Erklär kurz das System. Das zeigt uns „automatisiere dich selbst" konkret.

## Spielregeln

- ⏱️ **Aufwand: ~4–6 fokussierte Stunden.** Eine Woche Fenster für Flexibilität — bitte nicht überinvestieren. Wir bewerten **Schärfe des Denkens**, nicht Hochglanz. *(Die 4–6 h schließen Walkthrough + Decision-Log ein — Loom: 1 Take, 3–5 min; Decision-Log: 5–10 Zeilen Stichworte.)*
- 🤖 **Nutze KI offensiv** (ChatGPT/Claude für Recherche, Sizing, Copy, Analyse). Wird erwartet.
- 🎯 Deliverables 1–4 sind die Latte; der Stretch ist optional.

> **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Wir meinen das ernst — bitte nicht überinvestieren. Mehr Stunden bedeuten bei uns **nicht** mehr Punkte; wir bewerten das Kern-Ergebnis, nicht den Zeitaufwand.

Das Seed-Dataset ist synthetisch/vereinfacht (Stand 2026-06) — kein Domänenwissen nötig, alles steckt in den Daten.

AI Factory Austria steht für Chancengleichheit. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid — wir helfen. Ob Uni, Bootcamp oder self-taught: es zählt, wie du denkst und mit KI arbeitest.

## Was du abgibst

1. **Lean Canvas + Business-Case + ICP/VP + Ads-Brief** (ein PDF oder ein Doc, gern knapp; max. ~5 Slides falls du Slides nutzt).
2. **Walkthrough (≤5 min Loom/Screen-Recording):** führ uns durch dein Denken — Recherche → Insight → Empfehlung — und erklär, *wie du KI eingesetzt* hast.
3. **Decision-Log + Schlüssel-Prompts / KI-Workflow:** Schlüssel-Entscheidungen, Trade-offs, was du gecuttet hast + die KI-Prompts, die den Unterschied gemacht haben — zeig uns, wie du mit KI arbeitest.
4. **(Falls Stretch)** Link/Export der Automation + 3–5 Sätze System-Erklärung.
5. **Selbst-Report:** investierte Stunden (ehrlich).

## So bewerten wir (transparent)

| Dimension | Gewicht |
|---|---|
| Commercial Reasoning (bottom-up, Unit Economics, konsistente Annahmen) | 25% |
| Customer Insight / ICP (scharfes Segment, Annahmen getaggt) | 20% |
| AI-Leverage / „automatisiere dich selbst" | 20% |
| Priorisierung / Scrappiness (was du gecuttet hast & warum) | 15% |
| Marketing / Positioning (ICP-Fit, Kanal-Fit, Mess-Trigger) | 10% |
| Kommunikation / Storytelling | 10% |

## Abgabe & Zeitplan

- 🗓️ **Deadline:** 7 Kalendertage ab Erhalt dieses Briefs.
- 📤 **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- ⏳ **Rückmeldung:** Wir melden uns innerhalb von ~10 Werktagen — mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

> 💡 Die konkreten Daten (Abgabedatum, ggf. Upload-Link) findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer **Live-Debrief (30–45 min)**: du präsentierst, wir **challengen 2–3 deiner Annahmen** — und schauen, ob du mit neuer Info deine Sicht updatest. Wir spielen 2–3 neue Datenpunkte durch — wie würdest du deine Sicht updaten? Kein Prüfungstrick, sondern wie wir täglich arbeiten.

> **Fair & transparent.** Diese Challenge ist unbezahlt — dafür bekommst du echten Gegenwert: Nach dem Debrief zeigen wir dir **unsere eigene Lösung** — mit echten Entscheidungen, Prompts und Trade-offs. Das ist unser „Learn"-Versprechen in Aktion, kein Einblick, den du anderswo bekommst. Und: **strukturiertes, ehrliches Feedback für jede:n** — egal wie der Prozess ausgeht. Kein Ghosting. Nie.

## Datenschutz

> **Datenschutz.** Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens **sechs Monate** nach Abschluss des Auswahlverfahrens (oder früher auf deinen Wunsch) — gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. **Was du erstellst, bleibt deins** — wir verwenden es nur zur Bewertung, nie produktiv. Von dir gewählte Hosting-Dienste (z.B. Loom, Google) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.

Wir freuen uns drauf — zeig uns, wie du mit KI aus einer Idee einen Business Case machst. 🚀
