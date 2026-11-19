# StringLab: tension calculation excerpt

StringLab is a guitar string tension calculator: https://stringlab.javastereva.com/

This is a small excerpt of the production app's browser-side TypeScript. It computes
string tension from unit weight, scale length, and frequency, and linearly interpolates
scale length across a multiscale guitar. The full application also handles tuning,
string catalogs, saved presets, and shareable setups.

The source is extracted from `frontend/src/lib/tension.ts` in the StringLab project;
the configuration type here has been narrowed to the fields used by the excerpt.
