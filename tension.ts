// Extracted from StringLab's frontend/src/lib/tension.ts.
export const GRAVITY_CONSTANT = 386.4;

const round2 = (value: number) => Math.round(value * 100) / 100;

// T = UW × (2 × L × F)² ÷ 386.4, with unit weight in lb/in,
// length in inches, and frequency in Hz; the result is pounds-force.
export const stringTension = (unitWeight: number, scale: number, frequency: number) =>
  round2((unitWeight * (2 * scale * frequency) ** 2) / GRAVITY_CONSTANT);

type ScaleConfig = {
  isMultiScale: boolean;
  scaleLength: number;
  scaleStart: number;
  scaleEnd: number;
  strings: readonly unknown[];
};

// Multiscale guitars fan linearly from the treble string to the bass string.
export const scaleForString = (config: ScaleConfig, index: number) => {
  if (!config.isMultiScale) return config.scaleLength;
  const position = config.strings.length > 1 ? index / (config.strings.length - 1) : 0;
  return config.scaleStart + (config.scaleEnd - config.scaleStart) * position;
};
