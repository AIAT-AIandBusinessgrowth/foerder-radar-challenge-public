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
