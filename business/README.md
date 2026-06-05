# AI Business Analyst & Venture Builder Challenge: Förder-Radar

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Hi, willkommen. Das hier ist ein echtes Stück Venture-Studio-Arbeit: eine Idee in einer Woche auf Marktreife prüfen und verkaufsfähig machen, mit KI als Hebel.

Eine Musterlösung, die du treffen musst, gibt es nicht. Uns interessiert, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Das Szenario

Unser Tech-Team baut einen Prototyp: Förder-Radar, ein KI-Assistent, der österreichischen Startups und KMU in Sekunden zeigt, welche Förderungen (FFG, aws, EU, Bundesländer und mehr) zu ihnen passen, warum, und der einen ersten Antrags-Absatz draftet. Deine Aufgabe: Ist das ein Geschäft? Und wie bringen wir es an den Markt?

Als Orientierung liefern wir dir ein Seed-Dataset (rund 20 Förderprogramme als JSON und CSV, dazu Beispiel-Profile). Dasselbe Dataset bekommt die Dev-Rolle. Die Programme sind die Angebotsseite; deine zahlenden Kund:innen sind die Startups und KMU, die danach suchen. Die Beispiel-Profile sind dein Ausgangspunkt fürs Sizing.

Im Repo: [`../data/`](../data/) mit `programs.json` und `programs.csv` (Feld-Doku in [`../data/README.md`](../data/README.md)).

Für diese Analyse behandelst du Förder-Radar als eigenständiges, kommerzielles Venture, losgelöst vom selbst nicht-kommerziellen, EU-geförderten AI:AT-Kontext.

## Deine Deliverables

Sie sind bewusst gedeckelt, wir bewerten Denken und nicht Folien-Design.

1. **Lean Canvas** für Förder-Radar, problem-first.
2. **Ein-Seiten-Business-Case** mit:
   - **Marktgröße bottom-up** (Zielkunden × Preis × Conversion). Bitte kein „1 % von einem Riesenmarkt". Beispiel: 5.000 erreichbare Ziel-KMU × 40 € pro Monat × 3 % Conversion. Eine hergeleitete Zahl schlägt eine große Zahl ohne Herleitung.
   - **Grobe Unit Economics** (CAC, ARPU/LTV, Payback). Kurz: Was kostet eine Kundin oder ein Kunde (CAC) gegenüber dem, was sie bringt (ARPU pro Monat, LTV über die Lebensdauer), und nach wie vielen Monaten ist der CAC zurückverdient (Payback)? Grobe, begründete Schätzungen genügen.
   - **Die riskanteste Annahme** benannt, plus ein billiger Test dafür.
3. **ICP plus Value Proposition** für ein Segment. Markiere jede Annahme als validiert oder als Hypothese. Bonus: zwei bis drei echte Mini-Gespräche mit Zielkund:innen oder ein schneller Landing-Page-Smoke-Test.
4. **Marketing-Mini-Brief:** ein ICP, ein Kanal, drei hypothetische Ads (Headline, Body, Visual-Idee), ein Landing-Page-Hero (Headline, Subhead, CTA, drei Value-Bullets) und eine Mess-Zeile pro Asset („Erfolg = ...").

### Optionaler Stretch

Bau eine lauffähige Mini-Automation (n8n, Make, Zapier oder ein Custom-GPT), die einen Teil deiner eigenen Arbeit erledigt hat, etwa Markt- und Wettbewerbs-Recherche, das Generieren von Ad-Varianten oder das Auswerten von Umfrage-Daten. Erklär kurz das System. Das zeigt uns „automatisiere dich selbst" ganz konkret.

## Spielregeln

- **Aufwand:** rund 4–6 fokussierte Stunden. Eine Woche Fenster für deine Flexibilität, bitte nicht überinvestieren. Wir bewerten die Schärfe des Denkens, nicht Hochglanz. (Die 4–6 Stunden schließen Walkthrough und Decision-Log ein: Loom ein Take, drei bis fünf Minuten; Decision-Log fünf bis zehn Zeilen Stichworte.)
- **KI:** Nutze sie offensiv (ChatGPT, Claude für Recherche, Sizing, Copy, Analyse). Das erwarten wir.
- **Fokus:** Deliverables 1 bis 4 sind die Latte, der Stretch ist optional.

Noch einmal in Klartext: Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Mehr Stunden bringen bei uns keine zusätzlichen Punkte, wir bewerten das Kern-Ergebnis und nicht den Zeitaufwand.

Das Seed-Dataset ist synthetisch und vereinfacht (Stand 2026-06). Domänenwissen brauchst du keines, alles steckt in den Daten.

AI Factory Austria steht für Chancengleichheit. Ob Uni, Bootcamp oder self-taught, es zählt, wie du denkst und mit KI arbeitest. Wenn du im Prozess Unterstützung oder Anpassungen brauchst, sag uns Bescheid.

## Was du abgibst

1. **Lean Canvas, Business-Case, ICP/VP und Ads-Brief** als ein PDF oder ein Doc, gern knapp (max. rund 5 Slides, falls du Slides nutzt).
2. **Walkthrough** (max. 5 Minuten Loom oder Screen-Recording): führ uns durch dein Denken, von der Recherche über den Insight zur Empfehlung, und erklär, wie du KI eingesetzt hast.
3. **Decision-Log plus Schlüssel-Prompts:** Schlüssel-Entscheidungen, Trade-offs, was du gecuttet hast, dazu die KI-Prompts, die den Unterschied gemacht haben.
4. **Falls Stretch:** Link oder Export der Automation plus drei bis fünf Sätze System-Erklärung.
5. **Selbst-Report:** investierte Stunden, ehrlich.

## So bewerten wir

| Dimension | Gewicht |
|---|---|
| Commercial Reasoning (bottom-up, Unit Economics, konsistente Annahmen) | 25% |
| Customer Insight und ICP (scharfes Segment, Annahmen getaggt) | 20% |
| AI-Leverage, „automatisiere dich selbst" | 20% |
| Priorisierung und Scrappiness (was du gecuttet hast und warum) | 15% |
| Marketing und Positioning (ICP-Fit, Kanal-Fit, Mess-Trigger) | 10% |
| Kommunikation und Storytelling | 10% |

## Abgabe und Zeitplan

- **Deadline:** 7 Kalendertage ab Erhalt dieses Briefs.
- **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- **Rückmeldung:** Wir melden uns innerhalb von rund 10 Werktagen, mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

Abgabedatum und gegebenenfalls Upload-Link findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer Live-Debrief (30–45 Minuten): du präsentierst, wir challengen zwei bis drei deiner Annahmen und spielen ein paar neue Datenpunkte durch. Wie würdest du deine Sicht damit updaten? Das ist kein Prüfungstrick, sondern wie wir täglich arbeiten.

Die Challenge ist unbezahlt, und der Gegenwert ist echt: Nach dem Debrief bekommst du unsere eigene Lösung zu sehen, mit den tatsächlichen Entscheidungen, Prompts und Trade-offs. Feedback gibt es für jede Person, egal wie es ausgeht. Kein Ghosting.

Wir freuen uns drauf. Zeig uns, wie du mit KI aus einer Idee einen Business Case machst.

## Datenschutz

Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens sechs Monate nach Abschluss des Auswahlverfahrens, oder früher auf deinen Wunsch, gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. Was du erstellst, bleibt deins, wir verwenden es nur zur Bewertung und nie produktiv. Von dir gewählte Hosting-Dienste (z.B. Loom, Google) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.
