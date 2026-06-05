# Seed-Dataset: Felder und Hinweise

Das Dataset ist synthetisch und vereinfacht (Stand 2026-06) und keine offizielle AI:AT-Position. Die Programmnamen sind an reale österreichische und EU-Förderungen angelehnt; die Werte (Summen, Quoten, Deadlines) sind vereinfacht und gerundet. Domänenwissen brauchst du keines, alles steckt in den Daten.

## `programs.json` und `programs.csv` (rund 20 Programme)

Beide Dateien enthalten dieselben Daten. Die CSV öffnest du bequem in Excel oder Sheets, die JSON liest sich praktisch im Code ein.

| Feld | Typ | Bedeutung |
|---|---|---|
| `name` | string | Name des Förderprogramms |
| `traeger` | string | Fördergeber (z.B. aws, FFG, KLIEN, Land oder Stadt, EU) |
| `zielgruppe` | string | Für wen das Programm gedacht ist |
| `stage` | string | Phase: `PreSeed`, `Seed`, `Growth`, `Scale`, `alle` |
| `region` | string | `bundesweit`, `EU` oder ein konkretes Bundesland (z.B. `Wien`, `Tirol`, `Steiermark`, `Niederösterreich`) |
| `max_summe` | number | Maximale Fördersumme in EUR |
| `foerderquote` | number | Förderquote als Anteil `0.0` bis `1.0` (z.B. `0.5` = 50 %) |
| `themen` | string[] | Themen-Tags (z.B. „KI", „Digitalisierung", „Klima", „Forschung") |
| `deadline_typ` | string | `laufend` (jederzeit einreichbar) oder `Call` (Stichtag oder Runden) |
| `url` | string | Link zur Programmseite |
| `kurzbeschreibung` | string | ein bis zwei Sätze Beschreibung |

`programs.json` trägt zusätzlich ein `_hinweis`-Feld mit dem Synthetik-Vermerk.

## `examples/profil_*.json` (Beispiel-Profile)

Ausgangspunkt für deine Arbeit, ein Startup- oder KMU-Profil:

| Feld | Typ | Bedeutung |
|---|---|---|
| `branche` | string | Branche des Startups oder KMU |
| `stage` | string | Phase (Werte wie oben) |
| `bundesland` | string | Sitz-Bundesland |
| `team_groesse` | number | Teamgröße (Personen) |
| `vorhaben` | string | Was sie vorhaben (Freitext) |
| `gesuchte_summe` | number | Gesuchte Fördersumme in EUR |
