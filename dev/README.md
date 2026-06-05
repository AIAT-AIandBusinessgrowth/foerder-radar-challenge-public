# AI Developer Challenge: Förder-Radar

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Hi, schön dass du dabei bist. Das hier ist kein Trick-Test. Es ist ein kleines, echtes Stück von dem, was wir im Venture Studio und n8n CoE täglich tun: mit KI schnell etwas Lauffähiges bauen, das Mehrwert schafft.

Eine Musterlösung, die du treffen musst, gibt es nicht. Uns interessiert, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Die Mission

Österreichische Startups und KMU verlieren Förderungen, weil die Landschaft (FFG, aws, EU, Bundesländer und mehr) undurchsichtig ist. Bau einen Förder-Radar: ein kleines Tool, das ein Startup-Profil nimmt und in Sekunden zeigt, welche Förderungen passen, warum, und das einen ersten Antrags-Absatz draftet.

Wir liefern dir ein Seed-Dataset mit rund 20 Förderprogrammen (JSON und CSV, Felder dokumentiert) plus zwei bis drei Beispiel-Profile. Domänenwissen brauchst du keines, alles steckt im Dataset.

Im Repo: [`../data/`](../data/) mit `programs.json`, `programs.csv` und den Beispiel-Profilen (Feld-Doku in [`../data/README.md`](../data/README.md)).

### Teil A: Bau den PoC

- **Input:** ein Startup- oder KMU-Profil (Branche, Stage, Bundesland, Team-Größe, Vorhaben, gesuchte Summe).
- **Output:** ein begründetes Ranking der passendsten Programme (jeweils „passt, weil ... / passt nicht, weil ...") plus ein generierter Antrags-Absatz fürs Top-Programm.
- **Form:** ein lauffähiges Git-Repo mit echtem Code und ein README, das uns das Ding in unter 5 Minuten zum Laufen bringt. Den Stack wählst du. n8n darfst du integrieren, musst du aber nicht.

Ein echter LLM-Call ist erlaubt, aber keine Pflicht. Ein deterministisch oder templatebasiert erzeugter Antrags-Absatz ist völlig in Ordnung. Einen API-Key brauchst du nicht, falls du keinen hast.

### Teil B: Code-Review (rund 15 Minuten)

Wir geben dir ein kurzes, KI-generiertes Code-Snippet (TypeScript, du brauchst aber keine TS-Erfahrung, der Bug ist sprachunabhängig verständlich). Es steckt ein zentraler funktionaler Bug drin. Finde genau diesen, fixe ihn und schreib drei bis fünf Sätze dazu. Was dir sonst noch auffällt, gern zusätzlich. Uns interessiert, ob du KI-Output beurteilen kannst, nicht nur erzeugen.

Das Snippet liegt als Datei unter [`code-review/snippet.ts`](./code-review/snippet.ts) und steht unten in Anhang A.

## Spielregeln

- **Aufwand:** rund 4–6 fokussierte Stunden. Du hast eine Woche, das Fenster ist für deine Flexibilität da, nicht zum Durchgrinden. Wir bewerten Denken und Urteil, nicht Politur. (Die 4–6 Stunden schließen Walkthrough und Decision-Log ein: Loom ein Take, drei bis fünf Minuten; Decision-Log fünf bis zehn Zeilen Stichworte.)
- **KI:** Nutze jede KI, jede Library, google frei. Cursor, Claude, Copilot, Coding-Agents, leg los. Das erwarten wir, es ist nicht nur erlaubt.
- **Fokus:** Der Kern (Teil A und B) ist die Latte. Stretch-Goals wie UI, Tests, Eval-Set, Confidence-Scores, mehr Datenquellen oder Deployment sind optional und nur zum Glänzen da.

Noch einmal in Klartext: Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Mehr Stunden bringen bei uns keine zusätzlichen Punkte, wir bewerten das Kern-Ergebnis und nicht den Zeitaufwand.

AI Factory Austria steht für Chancengleichheit. Ob Uni, Bootcamp oder self-taught, es zählt, wie du denkst und mit KI arbeitest. Wenn du im Prozess Unterstützung oder Anpassungen brauchst, sag uns Bescheid.

## Was du abgibst

1. **Repo-Link** (GitHub oder GitLab) mit Code und README.
2. **Code-Review-Antwort** zu Teil B, als Datei im Repo oder als kurzes Doc.
3. **Walkthrough** (max. 5 Minuten Loom oder Screen-Recording): zeig dein Ergebnis und erklär, wie du gebaut hast, vor allem die KI-Schritte.
4. **Decision-Log plus Schlüssel-Prompts:** fünf bis zehn Zeilen Entscheidungen und Trade-offs, dazu die KI-Prompts, die den Unterschied gemacht haben. Zeig uns, wie du mit KI zusammenarbeitest, denn genau dafür besetzen wir die Rolle.
5. **Selbst-Report:** wie viele Stunden hast du investiert? Ehrlich, das gibt keinen Maluspunkt.

## So bewerten wir

| Dimension | Gewicht |
|---|---|
| Funktionalität (läuft es, erfüllt es den Kern) | 20% |
| Decomposition und Urteil (Ambiguität sinnvoll gelöst, gute Trade-offs) | 20% |
| AI-Collaboration und Prozess (wie du KI gehebelt und geprüft hast) | 20% |
| Code-Qualität und Taste (lesbar, wartbar, KI-Slop erkannt) | 15% |
| Kommunikation und Doku (README, Decision-Log, Walkthrough) | 15% |
| Tests (sinnvolle Tests, kein Coverage-Theater) | 10% |

Teil B (Code-Review) fließt nicht in diese Gewichtung ein. Es ist ein separates Signal mit besonders hohem Informationsgehalt über dein Urteil zu KI-Code und kann bei knappen Entscheidungen den Ausschlag geben.

## Abgabe und Zeitplan

- **Deadline:** 7 Kalendertage ab Erhalt dieses Briefs.
- **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- **Rückmeldung:** Wir melden uns innerhalb von rund 10 Werktagen, mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

Abgabedatum und gegebenenfalls Upload-Link findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer Live-Walkthrough (30–45 Minuten): du zeigst dein Ergebnis, wir setzen live eine neue Anforderung drauf und schauen, wie du deinen eigenen Code erweiterst. Die Anforderung ist bewusst klein, es geht um dein lautes Denken, nicht um ein perfektes Ergebnis in zehn Minuten. Deine gewohnten KI-Tools darfst du dabei nutzen, genau wie beim Bauen. Danach zeigen wir dir unsere eigene Lösung und reden ehrlich darüber.

Die Challenge ist unbezahlt, und der Gegenwert ist echt: Nach dem Debrief bekommst du unsere eigene Lösung zu sehen, mit den tatsächlichen Entscheidungen, Prompts und Trade-offs. Feedback gibt es für jede Person, egal wie es ausgeht. Kein Ghosting.

Viel Spaß beim Bauen.

## Datenschutz

Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens sechs Monate nach Abschluss des Auswahlverfahrens, oder früher auf deinen Wunsch, gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. Was du erstellst, bleibt deins, wir verwenden es nur zur Bewertung und nie produktiv. Dein Repo kannst du privat halten und uns Zugriff geben; deinen Walkthrough sehen nur wir intern. Von dir gewählte Hosting-Dienste (z.B. GitHub, Loom) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.

## Anhang A: Code-Snippet (Teil B)

Das ist das Snippet für Teil B. Finde den Bug, fixe ihn, kritisiere kurz. (Auch als Datei: [`code-review/snippet.ts`](./code-review/snippet.ts).)

```ts
/**
 * filterByRegion: filtert Förderprogramme nach dem Bundesland des Antragstellers.
 *
 * Gibt alle Programme zurück, deren Region mit dem angegebenen Bundesland übereinstimmt.
 */

interface Program {
  name: string;
  region: string;
  stage: string;
  max_summe: number;
}

function filterByRegion(programs: Program[], bundesland: string): Program[] {
  return programs.filter((p) => p.region === bundesland);
}

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

const programs: Program[] = [
  { name: "aws Gründerfonds",         region: "bundesweit", stage: "Seed",    max_summe: 200_000 },
  { name: "FFG Basisprogramm",        region: "bundesweit", stage: "Growth",  max_summe: 500_000 },
  { name: "Horizon Europe KMU",       region: "EU",         stage: "Growth",  max_summe: 2_500_000 },
  { name: "Standortagentur Tirol",    region: "Tirol",      stage: "Seed",    max_summe: 100_000 },
  { name: "Wirtschaftsförderung Wien",region: "Wien",       stage: "PreSeed", max_summe: 50_000 },
];

const profile = { bundesland: "Tirol" };

const matches = filterByRegion(programs, profile.bundesland);

console.log(`Passende Programme für Bundesland "${profile.bundesland}":`);
if (matches.length === 0) {
  console.log("  (keine Treffer)");
} else {
  matches.forEach((p) => {
    console.log(`  • ${p.name} [${p.region}], max. €${p.max_summe.toLocaleString("de-AT")}`);
  });
}
```
